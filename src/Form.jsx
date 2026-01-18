 import { useRef } from "react";
 
 const Form = () => {
    const formRef = useRef(null);

    const changeBackground = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    formRef.current.style.backgroundColor = 'lightgreen';
    }

  return (
    <form onSubmit={changeBackground} ref={formRef}>
        <label>Enter Text:</label>
        <input type="text" key="input"/>
        <button type="submit">Submit</button>
    </form>
    );
}; 

export default Form;