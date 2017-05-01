		$(document).ready(function() {
		    publishList();
		    favoritesList();
		    $('#chagePwd').click(function() {
		        $('#base_info').hide();
		        $('#chagePwd').hide();
		        $('#pwd_info').show();
		    });
		    $('#yeschagePwd').click(function() {
		        alert("修改密码成功！");
		        $('#pwd_info').hide();
		        $('#base_info').show();
		        $('#chagePwd').show();
		    });
		    $('#publish_me').click(function() {
		        $('#favorites').hide();
		        $('#publish_info').show();
		    });
		    $('#favorites_me').click(function() {
		        $('#publish_info').hide();
		        $('#favorites').show();
		    });

		    function publishList() {
		        var arrList = [{
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }];
		        for (var i = 0; i < arrList.length; ++i) {
		            $('#publish_info').append(
		                '<li class="list-group-item" style="height: 50px;">' +
		                '<span style="float: right;">' +
		                '<button  type="button" class="btn btn-primary" style="margin-right:5px;">修改</button>' +
		                '<button type="button" class="btn btn-primary">删除</button>' +
		                '</span>' +
		                '<span>[</span>' + arrList[i].title + '<span>]：</span>' +
		                '<span>' + arrList[i].content + '</span>' +
		                '</li>'
		            );
		        }
		    }

		    function favoritesList() {
		        var arrList1 = [{
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }, {
		            'title': '二手交易',
		            'content': ' 出售51开发版一套~ '
		        }];
		        for (var i = 0; i < arrList1.length; ++i) {
		            $('#favorites').append(
		                '<li class="list-group-item" style="height: 50px;">' +
		                '<span style="float: right;">' +
		                '<button type="button" class="btn btn-primary">删除</button>' +
		                '</span>' +
		                '<span>[</span>' + arrList1[i].title + '<span>]：</span>' +
		                '<span>' + arrList1[i].content + '</span>' +
		                '</li>'
		            );
		        }
		    }
		});
