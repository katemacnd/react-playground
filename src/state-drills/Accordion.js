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
    state = {
        currentSectionIndex: 0
    };

    handleButtonClick(i) {
        this.setState({ currentSectionIndex: i })
      }

    renderButtons() {
        return this.props.sections.map((section, i) => (
            <li>
                <button key={i} onClick={() => this.handleButtonClick(i)}>
              {section.title}
                </button>
                {this.renderContent(i)}
            </li>
          ))
    }

    renderContent(i) {
        if (this.state.currentSectionIndex === i) {
            const contentSelected = this.props.sections[this.state.currentSectionIndex].content
            return (
                <p>
                    {contentSelected}
                </p>
            )
        }
    }

    render() {
        return (
            <div>
                <ul>
                {this.renderButtons()}
                </ul>
            </div>
        )
    }
}

export default Accordion;