# gnome-oyainput-indicator
Shows the status of [`oyainput-fix`](https://github.com/shimamu/oyainput-fcitx5-fix) (active, paused, or inactive) in the GNOME top bar.

## Overview

`gnome-oyainput-indicator` is a GNOME Shell extension that displays the status of the `oyainput` input method in the top panel. It provides a compact text indicator that shows whether `oyainput` is **active**, **paused**, or **inactive**.

## Features

- Displays `oya`, `o--`, or `---` based on input method status
- Colors indicate (can be customized via `stylesheet.css`):
  - White for **active** (`oya`)
  - White for **paused** (`o--`)
  - Gray for **inactive** (`---`)
- Updates every 500ms
- Lightweight and minimal design

## Screenshots

> ![screenshot](assets/screenshot-active.png)  
*Active (white)*

> ![screenshot](assets/screenshot-paused.png)  
*Paused (white)*

> ![screenshot](assets/screenshot-inactive.png)  
*Inactive (gray)*

## Installation

### From GNOME Extensions Website (Recommended)

You can install the extension directly from the official GNOME Extensions website:

🔗 **[GNOME Extensions – Oyainput Indicator](https://extensions.gnome.org/extension/8248/oyainput-indicator/)**

**Steps:**

1. Visit the link above in a browser that has the **GNOME Shell integration** extension installed.
2. Toggle the switch to **"On"** to install.
3. Approve the installation when prompted.
4. The extension will be enabled automatically.

> ✅ Your system will also handle future updates automatically.

### From Source (Manual Installation)

1. Clone this repository:

    ```bash
    git clone https://github.com/shimamu/gnome-oyainput-indicator.git
    ```

2. Copy the `extension/` folder to the local extensions directory:

    ```bash
    mkdir -p ~/.local/share/gnome-shell/extensions/
    cp -r gnome-oyainput-indicator/extension ~/.local/share/gnome-shell/extensions/gnome-oyainput-indicator@shimamu.github.com/
    ```

3. **Restart GNOME Shell**:
    - On **X11**: Press <kbd>Alt</kbd> + <kbd>F2</kbd>, type `r`, then press <kbd>Enter</kbd>
    - On **Wayland**: Log out and log back in

4. Enable the extension:

    ```bash
    gnome-extensions enable gnome-oyainput-indicator@shimamu.github.com
    ```

## Compatibility

| Extension Version | GNOME Shell Version |
|-------------------|---------------------|
| ~v2.0             | 48                  |

## Requirements

- GNOME Shell 48 or later
- [`oyainput-fix`](https://github.com/shimamu/oyainput-fcitx5-fix) (oyainput v1.2 - fcitx5 compatibility fix 1.1 or later)
- `pgrep` command available in PATH

## Configuration

This extension automatically detects whether `oyainput` is active, paused (`/tmp/oyainput-paused` exists), or inactive. No user configuration is required.

## License

This project is licensed under the GNU General Public License v3.0 or later. See [LICENSE](LICENSE) for details.

