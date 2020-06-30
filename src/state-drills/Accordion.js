import React from "react";

class Accordion extends React.Component {

    static defaultProps = {
        sections: [
            {
              title: 'Section 1',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
              title: 'Section 2',
              content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
              title: 'Section 3',
              content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
          ]
    }

    handleButtonClick(i) {
        this.setState({ currentTabIndex: i })
      }

    renderButtons() {
        return this.props.sections.map((sections, i) => (
            <button key={i} onClick={() => this.renderSection(i)}>
              {this.props.sections[i].title}
            </button>
          ))
    }

    renderSection(i) {
        const SectionSelected = this.props.sections[this.state.currentTabIndex].content
        return (
            <p>
           {SectionSelected}
            </p>
        )
    }

    render() {
        return (
            <div>
                <ul>
                {this.renderButtons()}
                {this.renderSection()}
                </ul>
            </div>
        )
    }
}

export default Accordion;