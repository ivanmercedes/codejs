import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
    overflow: hidden;
  }
  .split {
    display: flex;
    flex-direction: row;
  }

  .gutter {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    &:before{
      content: '';
      background-color: #2e2e2e;
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }
  }

  .gutter{
     /* &.gutter-horizontal {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg=='); */
      cursor: col-resize;
    }
  .decorationsOverviewRuler{
    display: none;
    }
`;

export default GlobalStyle;
