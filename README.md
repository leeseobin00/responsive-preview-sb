# Responsive-Preview

A component for toggling between web, tablet, and mobile views.

## Introduction

**Responsive Preview** is a React-based component that allows developers to **easily switch between desktop, tablet, and mobile views** for previewing web applications. It provides features to help developers instantly test UI designs across different device environments.

## Key Features

- **View Toggle Function**: Switch between desktop, tablet, and mobile views with a button click.
- **Custom Width Settings**: Developers can customize the screen sizes for mobile and tablet views.

## Installation

You can install the package using the following command:

```sh
npm install responsive-preview-sb
```

or

```sh
yarn add responsive-preview-sb
```

## Usage

Here’s an example of how to use the `ResponsivePreview` component to switch between desktop, tablet, and mobile views.

### Example 1

```tsx
<ResponsivePreview defaultView="desktop" mobileWidth={375} tabletWidth={768}>
  <iframe
    src="https://flowbite.com/"
    width="100%"
    height="600px"
    title="Blog Website Preview"
    frameBorder="0"
  />
</ResponsivePreview>
```

**Desktop View**
![image](https://github.com/user-attachments/assets/bc1b34df-e08c-416f-85b4-16532847afa5)

**Tablet View**
![image](https://github.com/user-attachments/assets/21da809b-1337-4e3b-94c0-39f44275df1a)

**Mobile View**
![image](https://github.com/user-attachments/assets/5810bba6-7d42-4a3e-990b-523b53067431)

---

### Example 2

```tsx
<ResponsivePreview defaultView="mobile" mobileWidth={375} tabletWidth={768}>
  <h2 className="responsive-title">Responsive UI Test</h2>
  <p className="responsive-description">
    Resize the screen to see how the layout adapts to different devices. ...
  </p>

  <div className="responsive-box-container">
    <div className="responsive-box">Box 1</div>
    <div className="responsive-box">Box 2</div>
    <div className="responsive-box">Box 3</div>
  </div>

  <button className="responsive-button">Try It Out</button>
</ResponsivePreview>
```

**Desktop View**
![image](https://github.com/user-attachments/assets/6567489b-3609-43e3-b891-bd39ab1f8448)

**Tablet View**
![image](https://github.com/user-attachments/assets/b5b9f12e-3bbd-471c-8a06-18027e88d859)

**Mobile View**
![image](https://github.com/user-attachments/assets/5a4e8126-1521-4701-bb59-c9415d6e8cf5)

---

## Props

| Prop Name     | Type        | Default   | Description                                         |
| ------------- | ----------- | --------- | --------------------------------------------------- |
| `children`    | `ReactNode` | `null`    | The content to be previewed inside the component    |
| `defaultView` | `string`    | `desktop` | The initial view (`desktop`, `tablet`, or `mobile`) |
| `mobileWidth` | `number`    | `375`     | Width of the mobile view (in px)                    |
| `tabletWidth` | `number`    | `768`     | Width of the tablet view (in px)                    |
| `className`   | `string`    | `""`      | Additional class name for custom styling            |

## Style Guide

The component provides default styles that can be customized as needed.

```css
.responsive-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.responsive-preview-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  color: #64748b;
}

.control-btn.active {
  background-color: #3b82f6;
  color: white;
  border-color: #2563eb;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}
```

## Development & Contribution

### Project Setup

```sh
git clone https://github.com/leeseobin00/Responsive-Preview.git
cd responsive-preview
```

## License

MIT License
