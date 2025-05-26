const Form1 = () =>{
    return (
        <div className="column is-third-quarter ">
            <div className="column is-half">
                <article className="mt-3 mx-auto message">
                    <div className="message-header">
                        <p>Please fill the below form to become a volunteer of Duck</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        Lorem ipsum dolor sit amet.
                        Totam nemo corporis dolores rerum.
                        Quaerat quidem non vel magni?
                    </div>
                </article>
            </div>

            <div className="column">
                <div className="field is-horizontal">
                    
                    <div className="field-body">
                        <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name" />
                            <span className="icon is-small is-left">
                            <i className="bi bi-person" />
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input
                            className="input is-success"
                            type="email"
                            placeholder="Email"
                            />
                            <span className="icon is-small is-left">
                            <i className="bi bi-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                            <i className="bi bi-check" />
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    
                    <div className="field-body">
                        <div className="field">
                        <p className="control is-expanded has-icons-left">
                            <input className="input" type="date" />
                            <span className="icon is-small is-left">
                                <i class="bi bi-calendar-event"></i>
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                            <input
                            className="input is-success"
                            type="number"
                            placeholder="Enter your Phone number"
                          
                            />
                            <span className="icon is-small is-left">
                            <i className="bi bi-telephone" />
                            </span>
                            <span className="icon is-small is-right">
                            <i className="bi bi-check"/>
                            </span>
                        </p>
                        </div>
                    </div>
                </div>
               
            <div className="field is-grouped">
                <div className="control">
                    <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                        <i className="bi bi-geo-alt-fill" />
                    </span>
                        <div className="select">
                            <select name="namecoutry" id="countryName">
                                <option value="Ind">New Jersey</option>
                                <option value="Ind">Budapest</option>
                                <option value="Ind">Mexico-Latvia</option>
                                <option value="Ind">New York</option>
                                <option value="Ind">London</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                    <div className="control">
                        <button className="button  is-hoverable" type="submit">
                        <i className="bi bi-send-fill"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form1