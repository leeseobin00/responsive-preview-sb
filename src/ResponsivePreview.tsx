import React, { useState } from "react";
import "./ResponsivePreview.scss";

interface ResponsivePreviewProps {
  children: React.ReactNode;
  defaultView?: "desktop" | "mobile" | "tablet";
  mobileWidth?: number;
  tabletWidth?: number;
  className?: string;
}

export const ResponsivePreview: React.FC<ResponsivePreviewProps> = ({
  children,
  defaultView = "desktop",
  mobileWidth = 375,
  tabletWidth = 768,
  className = "",
}) => {
  const [currentView, setCurrentView] = useState<
    "desktop" | "mobile" | "tablet"
  >(defaultView);

  const getPreviewWidth = () => {
    switch (currentView) {
      case "mobile":
        return mobileWidth;
      case "tablet":
        return tabletWidth;
      default:
        return "100%";
    }
  };

  return (
    <div className={`responsive-preview ${className}`}>
      <div className="responsive-preview-controls">
        <button
          className={`control-btn ${currentView === "desktop" ? "active" : ""}`}
          onClick={() => setCurrentView("desktop")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <span>Desktop</span>
        </button>
        <button
          className={`control-btn ${currentView === "tablet" ? "active" : ""}`}
          onClick={() => setCurrentView("tablet")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18.01"></line>
          </svg>
          <span>Tablet</span>
        </button>
        <button
          className={`control-btn ${currentView === "mobile" ? "active" : ""}`}
          onClick={() => setCurrentView("mobile")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18.01"></line>
          </svg>
          <span>Mobile</span>
        </button>
      </div>
      <div
        className="responsive-preview-content"
        style={{ width: getPreviewWidth() }}
      >
        {children}
      </div>
    </div>
  );
};
