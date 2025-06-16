.PHONY: all screenshot clean

all: screenshot

screenshot:
	@bash scripts/make_screenshots.sh

clean:
	@rm -f assets/screenshot-all.png
	@echo "🧹 Cleaned generated screenshot"

