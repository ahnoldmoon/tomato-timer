import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from '../../reducer';
import Timer from './presenter';


function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } =  state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    }
}

// export default connect(mapStateToProps)(Timer);
// export connect(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Timer);

// const ConnectedComponent = connect(mapStateToProps,mapActionsToProps)(Timer); 
// export {ConnectedComponent as Timer}


// export connect(map)(Two)
// export default connect(map)(One)

// and then:

// import One, { Two } from "stuff";


// https://stackoverflow.com/questions/52998469/how-to-use-react-memo-with-react-redux-connect

// React.memo HOC 일 뿐이므로 다음을 사용할 수 있습니다.

// 메모가없는 경우 :

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Button);
// 메모 포함 :

// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(React.memo(Button));
// 그리고 포장하기 위하여 포장하십시오조차 : (이것은 연결을 가진 해결책이어야한다)

// React.memo(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Button)
// );
// 우리가하는 것처럼 withRouter:withRouter(connect(...)())