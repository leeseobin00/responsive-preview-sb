# Responsive-Preview

A Component for toggling between web table, and mobile views

## Introduce

**Responsive Preview**는 React 기반의 컴포넌트로, 웹 애플리케이션에서 **데스크톱, 태블릿, 모바일 뷰를 손쉽게 전환**하여 미리보기할 수 있도록 도와줍니다. 개발자들이 UI 디자인을 다양한 디바이스 환경에서 즉시 테스트할 수 있도록 지원하는 기능을 제공합니다.

## 주요 기능

- **뷰 토글 기능**: 데스크톱, 태블릿, 모바일 뷰를 버튼 클릭만으로 전환 가능
- **사용자 정의 폭 설정**: 모바일과 태블릿의 화면 크기를 개발자가 원하는 대로 조정 가능

## 설치 방법

아래 명령어를 통해 패키지를 설치할 수 있습니다.

```sh
npm install responsive-preview
```

또는

```sh
yarn add responsive-preview
```

## 사용법

`ResponsivePreview` 컴포넌트를 사용하여 데스크톱, 태블릿, 모바일 뷰를 전환하는 예제입니다.

#### 예제 1) 
```tsx
<ResponsivePreview defaultView="desktop" mobileWidth={375} tabletWidth={768}>
  <iframe
    src="https://leeseobin.tistory.com/"
    width="100%"
    height="600px"
    title="Blog Website Preview"
    frameBorder="0"
  />
</ResponsivePreview>
```

**데스크탑 뷰**
![image](https://github.com/user-attachments/assets/9e2c0447-6f74-48ba-b341-cd637b578cab)


**태블릿 뷰**
![image](https://github.com/user-attachments/assets/d40081bf-eb7c-4145-857d-878c693bd0b0)


**모바일 뷰**
![image](https://github.com/user-attachments/assets/32495fbf-618b-4daf-98a4-44c019373faa)



#### 예제 2) 
```tsx
<ResponsivePreview
  defaultView="mobile"
  mobileWidth={375}
  tabletWidth={768}
  >
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h2>미리보기 콘텐츠</h2>
      <p>이곳에서 모바일과 태블릿 버전의 UI를 테스트할 수 있습니다.</p>
    </div>
</ResponsivePreview>
```

**데스크탑 뷰**
![image](https://github.com/user-attachments/assets/ec4d5218-62ec-4b97-8aec-59bb4c0e9c76)



**태블릿 뷰**
![image](https://github.com/user-attachments/assets/ead6e0e9-08b2-46f6-a272-ffef25edce97)



**모바일 뷰**
![image](https://github.com/user-attachments/assets/9593ba30-4071-4d9d-a370-2d152f2b8be4)




## Props 설명

| 속성명        | 타입        | 기본값    | 설명                                           |
| ------------- | ----------- | --------- | ---------------------------------------------- |
| `children`    | `ReactNode` | `null`    | 미리보기할 콘텐츠를 포함하는 요소              |
| `defaultView` | `string`    | `desktop` | 초기 뷰 설정 (desktop, tablet, mobile 중 선택) |
| `mobileWidth` | `number`    | `375`     | 모바일 뷰의 가로 크기 (px)                     |
| `tabletWidth` | `number`    | `768`     | 태블릿 뷰의 가로 크기 (px)                     |
| `className`   | `string`    | `""`      | 추가 스타일을 적용할 수 있는 클래스 이름       |

## 스타일 가이드

기본적으로 제공되는 스타일을 적용하여 UI를 구성할 수 있으며, 필요에 따라 커스텀 스타일을 추가할 수 있습니다.

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

## 개발 및 기여 방법

### 프로젝트 설정

```sh
git clone https://github.com/your-repo/responsive-preview.git
cd responsive-preview
```

## 라이선스

MIT 라이선스
