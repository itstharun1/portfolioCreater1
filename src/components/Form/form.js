// PortfolioForm.js

import './form.css';

const PortfolioForm = () => {
    
    const onCreate=()=>{
        window.location='/home'
    }
    const onName=(e)=>{
        localStorage.setItem(  "username", e.target.value) 
    }
    

    
    
    return (
        <div className="portfolio-form-container">
            <h2>Create Your Portfolio</h2>
            <form>
                <div className="form-group">
                    <label className='f-label' htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={onName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='f-label' htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                       
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='f-label' htmlFor="email">Course:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='f-label' htmlFor="email">Skills:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                      
                        required
                    />
                </div>
               
                <button onClick={onCreate} className='f-button' type="submit">Create Portfolio</button>
            </form>
        </div>
    );
};

export default PortfolioForm;
