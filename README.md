# PX to REM Converter

This extension allows you to quickly convert all `px` values to `rem` in your CSS files.

## How to Use

1. Open a `.css` file.
2. Press `Ctrl+Shift+P` and search for **"Convert PX to REM"**.
3. Click to execute, and all pixel values will be converted to `rem` automatically!

## Configuration

By default, 1rem = 16px. You can change this in `settings.json`:

```json
"px-to-rem.baseFontSize": 16
```

---

### **5. Install & Run the Extension**
1. Open **VSCode**.
2. Run `npm install` (if using TypeScript, configure `tsconfig.json`).
3. Press `F5` to launch the extension in a new VSCode instance.
4. Open a CSS file and run `Ctrl+Shift+P → Convert PX to REM`.

---

### **How It Works**
- Scans the **entire CSS file**.
- Finds all occurrences of **px values**.
- Converts them using the **default base font-size (16px)**.
- Replaces them **instantly**.

🚀 Now you have a **fully working VSCode Extension** to convert `px` to `rem`!

### **❤️ Support**

If you liked the project, I will appreciate if you leave a star. 🌟😊
