import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props){
    super(props);
      this.state = {
        id:'',
        name: '',
        status: false
    }
  }

  componentWillMount(){
    if(this.props.taskEditing){
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        status: this.props.taskEditing.status
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.taskEditing){//su dung khi chuyen tu them -> edit
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status
      });
    }else if(!nextProps.taskEditing){//edit -> thêm
      this.setState({
        id:'',
        name: '',
        status: false
      })
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => { 
    event.preventDefault();
    this.props.onSubmit(this.state);
    //clear và close form
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    });
  }

  render() {
    var {id} = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc' }
            <span
              className="fa fa-times-circle text-right" aria-hidden="true"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>
        <div className="panel-body">
        {/*đặt submit ở form*/}
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input 
                  className="form-control" 
                  type="text" 
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select 
                  className="form-control" 
                  required="required"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Lưu Lại</button>&nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
