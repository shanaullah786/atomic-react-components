import { css } from 'styled-components';

export default css`
  margin: 5px 5px;
  .search-box,
  .search-list {
    background: #fff;
    display: flex;
    border-radius: 8px;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    height: 39px;
    width: 638px;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
  }
  .search-list {
    border-radius: 5px;
    margin-top: 10px;
    line-height: 40px;
    padding-left: 12px;
  }
  .mic-box {
    display: flex;
    flex: 0 0 auto;
    align-items: stretch;
    flex-direction: row;
    width: 7%;
  }
  .mic-box-2 {
    flex: 1 0 auto;
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0;
    background: transparent;
    outline: none;
    width: 24px;
    line-height: 44px;
  }
  .search-mic {
    background: url(images/googlemic.png) 0 0 no-repeat;
    height: 24px;
    width: 24px;
    background-size: 24px;
    vertical-align: middle;
  }
  .search-btn {
    display: inline-block;
    fill: currentColor;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
    background: url(images/search.svg) 0 0 no-repeat;
  }
  .search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding-left: 10px;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 86%;
  }
  .search-btn-container {
    flex: 0 0 auto;
    padding-right: 13px;
    border-radius: 0;
    -webkit-border-top-right-radius: 8px;
    min-height: 40px;
    height: 40px;
    width: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    flex: 0 0 auto;
    padding: 0;
  }
  .search-btn-box {
    height: 20px;
    width: 20px;
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;