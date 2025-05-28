# Design

This Assignment implemented using **React**, **TypeScript**, **SCSS Modules**, and **react-aria-components**. It is part of a technical assignment.


## Components

### 1. **Button**
- Variants: `contained`, `outlined`
- Sizes: `small`, `medium`
- Themes: `primary`, `secondary`
- Supports: icon-only, text-only, and icon + text

 **Themes Part has not be coded, due to time constrain**

### 2. **Input**
- Styled input with focus, hover, and disabled states.

### 3. **NumberInput**
- Composed of `Input` and `Button`
- Supports increment/decrement via buttons
- Accepts typed values -- this can be achived by adding **Input** Component - for now its not added

### 4. **Slider**
- Value synced with `NumberInput`
- Built using `react-aria-components`



##  Getting Started

```bash
git clone https://github.com/masterdxb/assignment.git
cd assignment
npm install
npm run dev
