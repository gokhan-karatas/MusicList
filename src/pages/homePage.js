import React, {Component} from 'react';
import HeaderComponent from "../components/layout/headerComponent";
import FooterComponent from "../components/layout/footerComponent";
import {connect} from "react-redux";
import {getSearchResult} from "../actions";

class HomePage extends Component{

    state = {
        term: null,
        country: null,
        limit: null,
        media: null
    }

    constructor(props) {
        super(props);
        props.dispatch(getSearchResult(""));
        this.search();
    }

    search = () => {
        setTimeout(() => {
            this.setState({term: "taylor", country: "GB", limit: 20,media:"movie"},()=>{
                this.props.dispatch(getSearchResult(`term=${this.state.term}&country=${this.state.country}&limit=${this.state.limit}&media=${this.state.media}`
                ));
            })
        }, 2000)
    }


    render(){
        console.log("1111111", this.props.searchData)
        return (
            <div>
                <HeaderComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
        searchData: state.homeReducer.searchData ? state.homeReducer.searchData : []
    }
)
export default connect(mapStateToProps)(HomePage);
