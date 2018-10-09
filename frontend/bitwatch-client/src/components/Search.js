import React, { Component } from 'react';

import 'styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showIcon: false,
    };
  }

  handleInput = event => {
    const product = event.target.value.toUpperCase();
    this.filterOptions(product);
    this.props.setValue(event.target.value);
  }

  saveInput = event => {
    const product = event.target.innerHTML;
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
    let li = document.getElementsByTagName('LI');
    for (let i = 0; i < li.length; i++) {
      if (li[i].innerHTML.toUpperCase().includes(filter)) {
        // li[i].className='visible';
        li[i].style.display='';
      } else {
        // li[i].className='hidden';
        li[i].style.display='none';
      }
    }
  }

  handleClick = event => {
    if (this.state.showDropdown) {
      if (this.node.contains(event.target)) return;
      else this.hideList();
    }
  }

  showList = () => {
    this.setState({showDropdown: true})
  };

  hideList = () => {
    if (this.state.showDropdown) this.setState({showDropdown: false});
  }

  showIcon = () => {
    this.setState({showIcon: true})
  }

  hideIcon = () => {
    this.setState({showIcon: false})
  }

  renderOptions = () => {
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
        <input type='text' onClick={this.showList} onKeyUp={this.clearInput}
        onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}
        onChange={this.handleInput} value={this.props.value} placeholder='Select product' />
        {this.state.showIcon || this.state.showDropdown ?
          (<i className="Icon material-icons" onClick={this.showList}
          onMouseEnter={this.showIcon}
          onMouseLeave={this.hideIcon}>expand_more</i>) : ''}
        <ul ref ={this.list} style={this.state.showDropdown ? {} : {display: 'none'}}>
          {this.renderOptions()}
        </ul>
      </div>
    )
  }
}

export default Search;