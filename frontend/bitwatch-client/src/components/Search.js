import React, { Component } from 'react';

import 'styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showIcon: false
    }
  }

  handleInput = event => {
    const product = event.target.value.toUpperCase();
    this.filterOptions(product);
    this.props.setValue(event.target.value);
    console.log(event.target.value);
  }

  saveInput = event => {
    const product = event.target.innerHTML;
    console.log(product);
    this.props.setValue(product);
    this.setState({showDropdown: false});
  }

  clearInput = event => {
    if (event.keyCode === 8) {
      this.props.setValue('');
      this.filterOptions('');
      this.setState({showDropdown: true})
    }
  };

  filterOptions = (filter) => {
    let ul = document.querySelector('ul');
    let li = ul.getElementsByTagName('LI');
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML.toUpperCase().includes(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  handleClick = event => {
    console.log(this.state.showDropdown)
    if (this.state.showDropdown) {
      if (this.node.contains(event.target)) return;
      else this.hideList();
    }
  }

  showList = () => {
    this.setState({showDropdown: true})
  };

  hideList = event => {
    if (this.state.showDropdown) this.setState({showDropdown: false});
  }

  showIcon = () => {
    this.setState({showIcon: true})
  }

  hideIcon = () => {
    this.setState({showIcon: false})
  }

  renderOptions = () => {
    if (this.props.options.length) {
      console.log(this.props.options);
    }
    return this.props.options.map((product, i) => (
      <li key = {i} onClick={this.saveInput}>{product}</li>
    ))
  }

  componentWillMount() {
    document.addEventListener('click',this.handleClick, false);
  }

  componentWillUnMount() {
    document.removeEventListener('click',this.handleClick, false);
  }

  render() {
    return (
      <div className='Search' ref={node => this.node=node}>
        <input type='text' onClick={this.showList} onKeyUp={this.clearInput} onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon} onChange={this.handleInput} value={this.props.value} placeholder='Select product' />
        {this.state.showIcon || this.state.showDropdown ? (<i className="Icon material-icons" onClick={this.showList} onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>expand_more</i>) : ''}
        <ul style={this.state.showDropdown ? {} : {display: 'none'}}>
          {this.renderOptions()}
        </ul>
       {/* <ul ref={node => this.node=node}>
          {this.renderOptions()}
        </ul> */}
      </div>
    )
  }
}

export default Search;