import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음',
        color: 'blue',
        isSpecial: false
    };

    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

// function Hello({ name, color, isSpecial }) {
//     return <div style={{ color: color }}>
//         안녕 {name}
//         {isSpecial ? <b>***</b> : <b>---</b>}
//     </div>;
// }

// Hello.defaultProps = {
//     name: '이름없음',
//     color: 'blue',
//     isSpecial: true
// };

export default Hello;