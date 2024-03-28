import React from 'react';
import './CompanyDashboard.css'; // Import the CSS file for styling

function CompanyDashboard() {
    return (
        <div>
        <ul id="slide-out" className="side-nav fixed z-depth-2">
            <li className="center no-padding">
                <div className="indigo darken-2 white-text" style={{ height: '180px' }}>
                    <div className="row">
                        <img style={{ marginTop: '5%' }} width="100" height="100" src="https://res.cloudinary.com/dacg0wegv/image/upload/t_media_lib_thumb/v1463990208/photo_dkkrxc.png" className="circle responsive-img" alt="user-avatar" />
                        <p style={{ marginTop: '-13%' }}>Tirth Patel</p>
                    </div>
                </div>
            </li>

            <li id="dash_dashboard">
                <a className="waves-effect" href="#!"><b>Dashboard</b></a>
            </li>

            {/* Collapsible menu items */}
        </ul>

        <header>
            {/* Header content */}
        </header>

        <main>
            {/* Main content */}
        </main>

        <footer className="indigo page-footer">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5 className="white-text">Icon Credits</h5>
                        <ul id='credits'>
                            <li>Gif Logo made using <a href="https://formtypemaker.appspot.com/" title="Form Type Maker">Form Type Maker</a> from <a href="https://github.com/romannurik/FORMTypeMaker" title="romannurik">romannurik</a></li>
                            <li>Icons made by <a href="https://material.io/icons/">Google</a>, available under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License Version 2.0</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <span>Made By <a style={{ fontWeight: 'bold' }} href="https://github.com/piedcipher" target="_blank">Tirth Patel</a></span>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default CompanyDashboard;
