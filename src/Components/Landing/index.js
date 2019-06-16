import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Landing.css"
import {VideoSection} from "../VideoSection";
import {SliderChild, StyledAboutImage, StyledImage} from "../SliderChild";
import {StyledPrivacyContainer, StyledPrivacyText, StyledTitle} from "../Title";

const SEL = 'section';
const SECTION_SEL = `.${SEL}`;
const BASE_URL = "";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plates: [],
            sections: ["tradition", "showcase", "team", "privacy"]
        };
        this.component = this
    }

    componentDidMount() {

        this.loadMedia()
    }

    loadMedia() {
        fetch(BASE_URL + "https://s3.eu-west-2.amazonaws.com/eu.chefie/Static/LandingPage/mockups/mockups.json")
            .then(response => response.json())
            .then((jsonData) => {
                this.component.setState({plates: jsonData});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onLeave(origin, destination, direction) {

    }

    afterLoad(origin, destination, direction) {
    }

    render() {
        const {sections} = this.state;

        if (!sections.length) {
            return null;
        }

        return <React.Fragment>

            <ReactFullpage
                anchors={this.state.sections}
                sectionsColor={["#feb47b", "#ffb581", "#ff9784", "#646464"]}
                scrollOverflow={true}
                menu={"#chefieMenu"}
                scrollHorizontally={true}
                autoScrolling={true}
                slidesNavigation={true}
                sectionSelector={SECTION_SEL}
                afterLoad={this.afterLoad.bind(this)}
                onLeave={this.onLeave.bind(this)}
                render={({state, fullpageApi}) => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1">

                                <VideoSection url={"https://s3.eu-west-2.amazonaws.com/eu.chefie/Static/LandingPage/chefie.mp4"} type={"mp4"}/>
                            </div>
                            <div className="section">
                                {
                                    Object.values(this.component.state.plates).map((value, index) => {
                                        return <div className="slide" key={index}>
                                            <SliderChild url={value}/>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="section">
                                <StyledAboutImage id={"aboutImage"}
                                    src={"https://s3.eu-west-2.amazonaws.com/eu.chefie/Static/LandingPage/chefieFamily.png"}/>
                            </div>
                            <div className="section">

                                <StyledPrivacyContainer>

                                    <StyledPrivacyText>
                                        <p>DATA POLICY</p>
                                        <p>To provide Chefie, we must process information about you. The types of information we collect depend on how you use our app. </p>
                                        <p>Things you and others do and provide:</p>

                                     <p>    <strong> Information and content you provide. </strong>  We collect the content, communications and other information you provide when you use our app, including when you sign up for an account, create or share content, and message or communicate with others. This can include information in or about the content you provide (like metadata), such as the location of a photo or the date a file was created. It can also include what you see through features we provide, such as our camera, so we can do things like suggest masks and filters that you might like, or give you tips on using portrait mode. </p>

                                        <p> <strong>Data with special protections: </strong> You can choose to provide information in your Chefie profile fields, political views, who you are "interested in," or your health. This and other information (such as racial or ethnic origin, philosophical beliefs or trade union membership) is subject to special protections under EU law. </p>

                                <p> <strong> Information about transactions made on our app. </strong> If you use our app for purchases or other financial transactions, we collect information about the purchase or transaction. This includes payment information, such as your credit or debit card number and other card information; other account and authentication information; and billing, shipping and contact details.</p>


                                        <p className={"rightP"}>DATA POLICY PROVIDED BY TEAM CHEFIE.</p>
                                    </StyledPrivacyText>
                                </StyledPrivacyContainer>

                            </div>
                        </div>
                    );
                }}
            />
            <div id="chefieMenu">
                {
                    this.component.state.sections.map((value, index) => {

                        return (
                            <a data-menuanchor={value} className="menuItem" key={index}
                               href={"#" + value}>{value.charAt(0).toUpperCase() + value.substr(1, value.length)}</a>)
                    })
                }
            </div>
        </React.Fragment>;
    }
}

export default Index
