import {renderToString} from "react-dom/server"
import "./components.css"
export default function Code({children}) {
  
  return (
      <pre style={{
        whiteSpace: 'pre-line'
      }}>
    <code>
        {renderToString(children)}
    </code>
      </pre>
  )
}