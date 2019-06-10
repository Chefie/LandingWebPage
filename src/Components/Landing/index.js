import React from "react";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Landing.css"
import {VideoSection} from "../VideoSection";
import {SliderChild} from "../SliderChild";
import {StyledTitle} from "../Title";

const SEL = 'section';
const SECTION_SEL = `.${SEL}`;

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plates: [],
            sections: ["culture", "tradition", "future"]
        };
        this.component = this
    }

    componentDidMount() {

        this.loadMedia()
    }

    loadMedia() {
        fetch("https://api.allorigins.win/raw?url=https://chefiebucket.s3.amazonaws.com/Static/LandingPage/plates.json")
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
                sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
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
                                <VideoSection title={"Chefie es cultura"}
                                              type={"mp4"}
                                              url={'https://chefiebucket.s3.amazonaws.com/Static/LandingPage/VideoChocolate.mp4'}/>
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
                                <StyledTitle>
                                    Chefie es futuro
                                </StyledTitle>
                            </div>
                        </div>
                    );
                }}
            />
            <div id="chefieMenu">
                {
                    this.component.state.sections.map((value, index) => {

                        return (
                            <a data-menuanchor={value} className="menuItem"
                               href={"#" + value}>{value.charAt(0).toUpperCase() + value.substr(1, value.length)}</a>)
                    })
                }
            </div>
        </React.Fragment>;
    }
}

export default Index
