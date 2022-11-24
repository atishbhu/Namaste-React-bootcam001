import ReactDOM from 'react-dom/client';
import ComponentWithCRA from './component/ComponentUsingCreateReactApp';
import ComponentUsingJSX from './component/ComponentUsingJSX';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ComponentUsingJSX />);
