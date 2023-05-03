import React from "react";
class BoardHeading extends React.Component{
//번호 제목 작성자 조회수 제목행4개 컬럼 구성 1개행
render(){
    return (<thead><tr><th>번호</th><th>제목</th><th>작성자</th><th>조회수</th></tr></thead>);
}
}

class BoardRow extends React.Component{
    // 1개 게시물 저장하고 board 추가
    render() {
        // return (
        //   <tbody>
        //     {this.props.data.map((item) => (
        //       <tr>
        //         <td>{item.seq}</td>
        //         <td>{item.title}</td>
        //         <td>{item.writer}</td>
        //         <td>{item.view}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // );
        const board_row = this.props.data.map(function(oneboard){
            return (
            <tr key = {oneboard.seq}>
                <td>{oneboard.seq}</td>
                <td>{oneboard.title}</td>
                <td>{oneboard.writer}</td>
                <td>{oneboard.view}</td>
            </tr>)
        });
        return (
        <tbody>
            {board_row}
        </tbody>)
      }
}
class BoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        const redata = this.props.data
        this.oneboard = 
        {seq:'5', title:'제목5', writer:"작성자5", view:"0"}
    }
    render(){
        return(
            <div>
            번호 : {this.props.seq}
            제목 : {this.props.title}
            작성자 : {this.props.writer}
            조회수 : {this.props.view}
            게시물을 추가합니다.
            </div>
        )
        
    }
}
class BoardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board:[    
                {seq:'1', title:'제목1', writer:"작성자1", view:"10"},    
                {seq:'2', title:'제목2', writer:"작성자2", view:"11"},    
                {seq:'3', title:'제목3', writer:"작성자3", view:"30"},    
                {seq:'4', title:'제목4', writer:"작성자4", view:"55"},    
                {seq:'5', title:'제목5', writer:"작성자5", view:"0"},
                        
            ]
        }
    }
    render(){
        return (
            <div>
            <table border = '3'>
                <BoardHeading/> 
                <BoardRow data={this.state.board}/>
            </table>
            <BoardForm data={this.state.board}/>
            </div>);
        }
}
    
export default BoardList;