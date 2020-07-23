/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import '../stylesheets/superset.less';

window.onload = function(){
    const currentUrl = window.location.pathname;
    if(currentUrl.search('/login') != -1 ){
        let body = document.querySelector('body');
        let footer = document.querySelector('footer');
        let loginBox = document.querySelector('#loginbox');
        if( footer != null){
            footer.style.display = 'none';
        }
        if( body!=null ){
            body.style.backgroundImage = "url('/static/assets/images/bg.jpg')";
            body.style.backgroundSize = 'cover';
        }
        if( loginBox != null){
            loginBox.classList.add('sundear');
        }
    }
}


