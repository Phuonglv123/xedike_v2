import React, {Component} from 'react';
import {Result, Button} from "antd";
import AppUrl from "../../components/appRoute/AppUrl";

class NotFound404Scene extends Component {
    render() {
        return (
            <div id='notfound'>
                <div className='notfound'>
                    <Result style={{lineHeight: 1.5}}
                            status={'404'}
                            title={<h2>404 Not Found</h2>}
                            subTitle={<h2>Sorry, the page you visited does not exist.</h2>}
                            extra={<Button onClick={() => {
                                this.props.history.push(AppUrl.home())
                            }} type="primary">Back Home</Button>}
                    />
                </div>
            </div>
        );
    }
}

export default NotFound404Scene;
