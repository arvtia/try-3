const Form1 = () =>{
    return (
        <div className="columns  is-centered mx-2">
            <div className="column is-full-mobile is-half-tablet">
                <article className="message mt-3">
                <div className="message-header">
                    <p>Please fill out the form to become a volunteer for Duck</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    Lorem ipsum dolor sit amet. Totam nemo corporis dolores rerum.
                    Quaerat quidem non vel magni?
                </div>
                </article>
            </div>

            <div className="column is-full-mobile is-one-third-tablet">
                <div className="field">
                <div className="field-body">
                    <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Name" />
                        <span className="icon is-small is-left">
                        <i className="bi bi-person" />
                        </span>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="email" placeholder="Email" />
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

                <div className="field">
                    <div className="field-body">
                        <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="date" />
                            <span className="icon is-small is-left">
                            <i className="bi bi-calendar-event"></i>
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input is-success" type="number" placeholder="Enter your Phone number" />
                            <span className="icon is-small is-left">
                            <i className="bi bi-telephone" />
                            </span>
                            <span className="icon is-small is-right">
                            <i className="bi bi-check" />
                            </span>
                        </p>
                        </div>
                    </div>
                </div>

                    <div className="field is-grouped">
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
                    <div className="field">
                        <div className="control">
                            <button className="button is-hoverable" type="submit">
                                <i className="bi bi-send-fill"></i> Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Form1