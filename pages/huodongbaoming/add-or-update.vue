<template>
	<view class="content">
		<form class="app-update-pv">
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">报名编号</view>
				<view
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx","lineHeight":"78rpx"}'
					class="right-input">
					{{ruleForm.baomingbianhao}}
				</view>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">活动标题</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.huodongbiaoti" v-model="ruleForm.huodongbiaoti" placeholder="活动标题"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"#fff","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group" @tap="huodongtupianTap">
				<view
					:style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">活动图片</view>
				<view class="right-input" style="padding:0">
					<image
						:style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}'
						class="avator" v-if="ruleForm.huodongtupian" :src="baseUrl+ruleForm.huodongtupian"
						mode="aspectFill"></image>
					<image
						:style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}'
						class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">活动地点</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.huodongdidian" v-model="ruleForm.huodongdidian" placeholder="活动地点"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">开始时间</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.kaishishijian" v-model="ruleForm.kaishishijian" placeholder="开始时间"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">活动人数</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.huodongrenshu" v-model="ruleForm.huodongrenshu" placeholder="活动人数"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">社长账号</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.shezhangzhanghao" v-model="ruleForm.shezhangzhanghao" placeholder="社长账号"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">报名原因</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.baomingyuanyin" v-model="ruleForm.baomingyuanyin" placeholder="报名原因"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">报名时间</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					v-model="ruleForm.baomingshijian" placeholder="报名时间" @tap="toggleTab('baomingshijian')"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">学号</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.xuehao" v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">学生姓名</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view
				:style='{"padding":"40rpx 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}'
				class="cu-form-group">
				<view
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(94, 143, 247, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","fontSize":"28rpx","borderStyle":"solid"}'
					class="title">联系方式</view>
				<input
					:style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba( 123, 120, 244, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"dashed ","height":"88rpx"}'
					:disabled="ro.lianxifangshi" v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
			</view>

			<!-- 否 -->




			<view class="btn">
				<button
					:style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0 auto","backgroundColor":"rgba( 123, 120, 244, 1)","borderColor":"rgba( 123, 120, 244, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'
					@tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="baomingshijianConfirm"
			ref="baomingshijian" themeColor="#333333"></w-picker>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross: '',
				ruleForm: {
					baomingbianhao: this.getUUID(),
					huodongbiaoti: '',
					huodongtupian: '',
					huodongdidian: '',
					kaishishijian: '',
					huodongrenshu: '',
					shezhangzhanghao: '',
					baomingyuanyin: '',
					baomingshijian: '',
					xuehao: '',
					xueshengxingming: '',
					lianxifangshi: '',
					sfsh: '',
					shhf: '',
				},
				// 登陆用户信息
				user: {},
				ro: {
					baomingbianhao: false,
					huodongbiaoti: false,
					huodongtupian: false,
					huodongdidian: false,
					kaishishijian: false,
					huodongrenshu: false,
					shezhangzhanghao: false,
					baomingyuanyin: false,
					baomingshijian: false,
					xuehao: false,
					xueshengxingming: false,
					lianxifangshi: false,
					sfsh: false,
					shhf: false,
				},
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.ruleForm.baomingshijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;

			// ss读取
			this.ruleForm.xuehao = this.user.xuehao
			this.ro.xuehao = true;
			this.ruleForm.xueshengxingming = this.user.xueshengxingming
			this.ro.xueshengxingming = true;
			this.ruleForm.lianxifangshi = this.user.lianxifangshi
			this.ro.lianxifangshi = true;



			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`huodongbaoming`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if (options.cross) {
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj) {
					if (o == 'baomingbianhao') {
						this.ruleForm.baomingbianhao = obj[o];
						this.ro.baomingbianhao = true;
						continue;
					}
					if (o == 'huodongbiaoti') {
						this.ruleForm.huodongbiaoti = obj[o];
						this.ro.huodongbiaoti = true;
						continue;
					}
					if (o == 'huodongtupian') {
						this.ruleForm.huodongtupian = obj[o];
						this.ro.huodongtupian = true;
						continue;
					}
					if (o == 'huodongdidian') {
						this.ruleForm.huodongdidian = obj[o];
						this.ro.huodongdidian = true;
						continue;
					}
					if (o == 'kaishishijian') {
						this.ruleForm.kaishishijian = obj[o];
						this.ro.kaishishijian = true;
						continue;
					}
					if (o == 'huodongrenshu') {
						this.ruleForm.huodongrenshu = obj[o];
						this.ro.huodongrenshu = true;
						continue;
					}
					if (o == 'shezhangzhanghao') {
						this.ruleForm.shezhangzhanghao = obj[o];
						this.ro.shezhangzhanghao = true;
						continue;
					}
					if (o == 'baomingyuanyin') {
						this.ruleForm.baomingyuanyin = obj[o];
						this.ro.baomingyuanyin = true;
						continue;
					}
					if (o == 'baomingshijian') {
						this.ruleForm.baomingshijian = obj[o];
						this.ro.baomingshijian = true;
						continue;
					}
					if (o == 'xuehao') {
						this.ruleForm.xuehao = obj[o];
						this.ro.xuehao = true;
						continue;
					}
					if (o == 'xueshengxingming') {
						this.ruleForm.xueshengxingming = obj[o];
						this.ro.xueshengxingming = true;
						continue;
					}
					if (o == 'lianxifangshi') {
						this.ruleForm.lianxifangshi = obj[o];
						this.ro.lianxifangshi = true;
						continue;
					}
				}
				this.ruleForm.huodongrenshu = 0;
				this.ro.huodongrenshu = false;
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(() => {
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			baomingshijianConfirm(val) {
				console.log(val)
				this.ruleForm.baomingshijian = val.result;
				this.$forceUpdate();
			},


			huodongtupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.huodongtupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(() => {
						_this.styleChange()
					})
				});
			},

			getUUID() {
				return new Date().getTime();
			},
			async onSubmitTap() {
				//跨表计算判断
				var obj = uni.getStorageSync('crossObj');
				var table = uni.getStorageSync('crossTable');
				obj.huodongrenshu = obj.huodongrenshu - this.ruleForm.huodongrenshu
				if (obj.huodongrenshu < 0) {
					this.$utils.msg("活动人数数量不足");
					return
				}
				if (this.ruleForm.huodongrenshu && (!this.$validate.isIntNumer(this.ruleForm.huodongrenshu))) {
					this.$utils.msg(`活动人数应输入整数`);
					return
				}
				//更新跨表属性
				var crossuserid;
				var crossrefid;
				var crossoptnum;
				if (this.cross) {
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if (statusColumnName != '') {
						var obj = uni.getStorageSync('crossObj');
						if (!statusColumnName.startsWith("[")) {
							for (var o in obj) {
								if (o == statusColumnName) {
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
							crossuserid = Number(uni.getStorageSync('userid'));
							crossrefid = obj['id'];
							crossoptnum = uni.getStorageSync('statusColumnName');
							crossoptnum = crossoptnum.replace(/\[/, "").replace(/\]/, "");
						}
					}
				}
				if (crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = {
						page: 1,
						limit: 10,
						crossuserid: crossuserid,
						crossrefid: crossrefid,
					}
					let res = await this.$api.list(`huodongbaoming`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
						//跨表计算
						var obj = uni.getStorageSync('crossObj');
						var table = uni.getStorageSync('crossTable');
						obj.huodongrenshu = parseFloat(obj.huodongrenshu) - parseFloat(this.ruleForm.huodongrenshu)
						await this.$api.update(`${table}`, obj);
						if (this.ruleForm.id) {
							await this.$api.update(`huodongbaoming`, this.ruleForm);
						} else {
							await this.$api.add(`huodongbaoming`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
					//跨表计算
					var obj = uni.getStorageSync('crossObj');
					var table = uni.getStorageSync('crossTable');
					obj.huodongrenshu = obj.huodongrenshu - this.ruleForm.huodongrenshu
					await this.$api.update(`${table}`, obj);
					if (this.ruleForm.id) {
						await this.$api.update(`huodongbaoming`, this.ruleForm);
					} else {
						await this.$api.add(`huodongbaoming`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 20rpx;
		background-color: #e5e7fd;
	}
	
	.container {
		padding: 20upx;
	}

	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}

	.cu-form-group.active {
		justify-content: space-between;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20upx 0;
	}

	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}

	.cu-form-group+.cu-form-group {
		border: 0;
	}

	.cu-form-group uni-input {
		padding: 0 30upx;
	}

	.uni-input {
		padding: 0 30upx;
	}

	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}

	.cu-form-group uni-picker::after {
		line-height: 80rpx;
	}

	.select .uni-input {
		line-height: 80rpx;
	}

	.input .right-input {
		line-height: 88rpx;
	}
	
	.cu-form-group {
		display: flex;
		align-items: center;
	}
</style>
