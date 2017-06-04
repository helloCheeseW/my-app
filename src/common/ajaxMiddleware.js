import {message} from 'antd';

export default function ajaxMiddleware({dispatch, getState}) {
    return function (next) {
        return function (action) {
            const {
                ajax,
                loadingParam,
                callback,
                ...rest,
            } = action;

            const setDispatch = (status)=>dispatch({
                ...rest,
                payload: {
                    [loadingParam]: status,
                },
            });

            if (ajax && ajax.url) {
                !_.isUndefined(loadingParam) && setDispatch(true);
                const params = Object.assign({}, {dataType: 'text', contentType: 'application/json'}, ajax);
                $.ajax(params).done(function (res) {
                    //请求成功调用callback
                    if (typeof callback === 'function') {
                        if(res){
                            callback(ajax.type === 'GET' ? JSON.parse(res) : res, dispatch, getState);
                        }
                    }
                }).fail(function (err) {
                    if(err && err.status===400){
                        message.error(JSON.parse(err.responseText).message)
                    }
                })
                .always(function () {
                    !_.isUndefined(loadingParam) && setDispatch(false)
                });
            } else {
                next(action)
            }
        }
    }
}
