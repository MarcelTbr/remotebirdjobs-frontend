import React from 'react'
const Navbar = (props) => {
    let {form,handleForm,handleSubmit}=props;
    return (
        <nav className="navbar navbar-dark px-4 navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Remote Bird Jobs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" target='/'>
                        <div className="form-group mx-3 row">
                            <label htmlFor="Topic" className=' w-auto text-white text-center col-auto my-auto'>Topic</label>
                            <select id="Topic" className="w-auto form-control col-auto my-auto"
                            name='topic'
                            value={form.topic}
                            onChange={handleForm}>
                                <option>ReactJs</option>
                                <option>Django</option>
                                <option>Python</option>
                                <option>C++</option>
                                <option>Javascript</option>
                            </select>
                        </div>
                        <div className="form-group mx-3 row">
                            <label htmlFor="type" className='w-auto text-white col-auto my-auto'>Job Type</label>
                            <select id="type" className="w-auto form-control col-auto my-auto"
                            name='type'
                            value={form.type}
                            onChange={handleForm}>
                                <option>Both</option>
                                <option>WFH</option>
                                <option>Remote</option>
                            </select>
                        </div>
                        <div className="form-group mx-3 row">
                                <label className='w-auto text-white col-auto my-auto' htmlFor="Start">Start Date </label>
                                <input type="date" id="Start" className="w-auto form-control col-auto my-auto"
                                name='startDate'
                                value={form.startDate}
                                onChange={handleForm}/>
                            </div>
                            <div className="form-group mx-3 row">
                                <label className='w-auto text-white col-auto my-auto' htmlFor="End">End Date</label>
                                <input type="date" id="End" className="w-auto form-control col-auto my-auto"
                                name='endDate'
                                value={form.endDate}
                                onChange={handleForm}/>
                            </div>
                        <button className="btn btn-outline-warning" onClick={handleSubmit}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
