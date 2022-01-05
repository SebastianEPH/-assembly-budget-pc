export default function Proforma(){
    return(
     <div>
         <form className="row g-3">
             {/* Processor */}
             <div className="col-md-9">
                 <label className="form-label">Processor</label>
                 <input type="text" className="form-control" id="processor" placeholder="Name and model"/>
             </div>{/* input */}
             <div className="col-md-1">
                 <label htmlFor="inputPassword4" className="form-label">Marca</label>
                 <select id="proce_brand" className="form-select">
                     <option selected>AMD</option>
                     <option>Intel</option>
                 </select>
             </div>{/* Brand */}
             <div className="col-md-2">
                 <label htmlFor="inputCity" className="form-label">Price</label>
                 <div className="input-group">
                     <div className="input-group-text">$</div>
                     <input type="text" className="form-control" id="proce_dolar"
                            placeholder="0"/>
                     <div className="input-group-text">S/</div>
                     <input type="text" className="form-control" id="proce_Sol"
                            placeholder="0" readOnly/>
                 </div>
             </div>{/* Price */}
             <div className="col-md-2">
                 <select id="proce_store" className="form-select">
                     <option selected>Other Store</option>
                     <option>Compuvision</option>
                     <option>Impacto</option>
                     <option>CyC computer</option>
                     <option>Cercoplus</option>
                 </select>
             </div>{/* Store */}
             <div className="col-md-10">
                 <div className="input-group">
                     <div className="input-group-text">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-link-45deg" viewBox="0 0 16 16">
                             <path
                                 d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                             <path
                                 d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                         </svg></div>
                     <input type="link" className="form-control" id="proce_link" placeholder="Link"/>
                     <a className="btn btn-primary" href>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                              className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
                             <path fillRule="evenodd"
                                   d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                             <path fillRule="evenodd"
                                   d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                         </svg></a>
                 </div>
             </div>{/* link */}

             {/* Memory RAM */}
             <div className="col-10">
                 <label  className="form-label">Memory RAM</label>
                 <input type="text" className="form-control" id="memory_ram" placeholder="Name and model"/>
             </div>{/* input */}
             <div className="col-md-2">
                 <label className="form-label">Price</label>
                 <div className="input-group">
                     <div className="input-group-text">$</div>
                     <input type="text" className="form-control" id="ram_dolar"
                            placeholder="0"/>
                     <div className="input-group-text">S/</div>
                     <input type="text" className="form-control" id="ram_Sol"
                            placeholder="0" readOnly/>
                 </div>
             </div>{/* Price */}
             <div className="col-md-2">
                 <select id="ram_store" className="form-select">
                     <option selected>Other Store</option>
                     <option>Compuvision</option>
                     <option>Impacto</option>
                     <option>CyC computer</option>
                     <option>Cercoplus</option>
                 </select>
             </div>{/* Store */}
             <div className="col-md-10">
                 <div className="input-group">
                     <div className="input-group-text">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-link-45deg" viewBox="0 0 16 16">
                             <path
                                 d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                             <path
                                 d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                         </svg></div>
                     <input type="link" className="form-control" id="ram_link" placeholder="Link"/>
                     <a className="btn btn-primary" href>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                              className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
                             <path fillRule="evenodd"
                                   d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                             <path fillRule="evenodd"
                                   d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                         </svg></a>
                 </div>
             </div>{/* link */}


             {/* Motherboard */}
             <div className="col-10">
                 <label  className="form-label">Motherboard</label>
                 <input type="text" className="form-control" id="motherboard" placeholder="Name and model"/>
             </div>{/* input */}
             <div className="col-md-2">
                 <label className="form-label">Price</label>
                 <div className="input-group">
                     <div className="input-group-text">$</div>
                     <input type="text" className="form-control" id="motherboard_dolar"
                            placeholder="0"/>
                     <div className="input-group-text">S/</div>
                     <input type="text" className="form-control" id="motherboard_Sol"
                            placeholder="0" readOnly/>
                 </div>
             </div>{/* Price */}
             <div className="col-md-2">
                 <select id="motherboard_store" className="form-select">
                     <option selected>Other Store</option>
                     <option>Compuvision</option>
                     <option>Impacto</option>
                     <option>CyC computer</option>
                     <option>Cercoplus</option>
                 </select>
             </div>{/* Store */}
             <div className="col-md-10">
                 <div className="input-group">
                     <div className="input-group-text">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-link-45deg" viewBox="0 0 16 16">
                             <path
                                 d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                             <path
                                 d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                         </svg></div>
                     <input type="link" className="form-control" id="motherboard_link" placeholder="Link"/>
                     <a className="btn btn-primary" href>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                              className="bi bi-box-arrow-up-right" viewBox="0 0 20 20">
                             <path fillRule="evenodd"
                                   d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                             <path fillRule="evenodd"
                                   d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                         </svg></a>
                 </div>
             </div>{/* link */}



             {/*  */}

         </form>
     </div>
    )
}