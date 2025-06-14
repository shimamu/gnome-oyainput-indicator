/*
 * extension.js
 *
 * GNOME Shell extension for showing the oyainput input method status in the top panel.
 * Displays a short text indicator with different colors depending on the running and paused state.
 *
 * Author: shimamu
 * Repository: https://github.com/shimamu/gnome-oyainput-indicator
 * License: GPL-3.0-or-later
 */

import GObject from 'gi://GObject';
import St from 'gi://St';
import GLib from 'gi://GLib';
import Clutter from 'gi://Clutter';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

const PAUSED_FILE_PATH = '/tmp/oyainput-paused';

function isOyainputRunning() {
    try {
        let [ok, stdout] = GLib.spawn_command_line_sync('pgrep -x oyainput');
        return ok && stdout.length > 0;
    } catch (e) {
        return false;
    }
}

function isPaused() {
    return GLib.file_test(PAUSED_FILE_PATH, GLib.FileTest.EXISTS);
}

const OyainputIndicator = GObject.registerClass(
class OyainputIndicator extends PanelMenu.Button {
    _init() {
        super._init(0.0, 'Oyainput Status');

        this.label = new St.Label({
            text: '',
            y_align: Clutter.ActorAlign.CENTER,
            style_class: 'oyainput-label',
        });

        this.add_child(this.label);
        this._updateLabel();

        this._timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 500, () => {
            this._updateLabel();
            return true;
        });
    }

    _updateLabel() {
        this.label.remove_style_class_name('running');
        this.label.remove_style_class_name('paused');

        if (!isOyainputRunning()) {
            this.label.set_text('---');
        } else if (isPaused()) {
            this.label.set_text('o--');
            this.label.add_style_class_name('paused');
        } else {
            this.label.set_text('oya');
            this.label.add_style_class_name('running');
        }
    }

    destroy() {
        if (this._timeoutId) {
            GLib.source_remove(this._timeoutId);
            this._timeoutId = null;
        }
        super.destroy();
    }
});

export default class GnomeOyainputIndicatorExtension extends Extension {
    enable() {
        this._indicator = new OyainputIndicator();
        Main.panel.addToStatusArea(this.uuid, this._indicator);
    }

    disable() {
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
    }
}

