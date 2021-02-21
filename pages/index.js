const cssInJSX =<style jsx="true">{`
  h1 {
    font-size: 72px;
    font-weight: bold;
    text-align: right;
    letter-spacing: -8px;
    color: #f0f0f0;
    margin: -40px 0px;
  }
  p {
    margin: 0px;
    color: #666;
    fontSize: 16px;
  }
  `}</style>

const JSX = () => (
  <div>
    {cssInJSX}
  
    <h1>Next.js</h1>
    <p>welcome to next.js!</p>
    <p>これはビルドインCSSによるスタイルです</p>
  </div>
)
export default JSX

