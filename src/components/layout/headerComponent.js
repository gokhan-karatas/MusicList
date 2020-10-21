import React, {Component} from 'react';
import SearchComponent from "../common/searchComponent";


class HeaderComponent extends Component {

    render() {
        return (
            <div className="header-root">
                <div className="header-wrapper safe-area">
                    <div className="header-container">
                        <div className="logo-block">
                            <div className="logo-item">
                                <div className="logo"></div>
                                <p>MusicWeb</p>
                            </div>
                        </div>
                       <SearchComponent/>
                       <div className="account-root">
                           <div className="account-wrapper">
                               <div className="account-container">
                                   <div className="img-item">
                                       <img src="/assets/img/user.jpg" alt=""/>
                                   </div>
                                   <span>Gökhan KARATAŞ</span>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
