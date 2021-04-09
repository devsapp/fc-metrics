declare global {
  interface Window {
    ALIYUN_FC_CONSOLE_CONFIG: any;
    ALIYUN_WIND_MESSAGE: any;
    ALIYUN_WINDV2_MESSAGE: any;
    ALIYUN_FC_CONSOLE_MESSAGE: any;
  }
}
export default {
  'fc.dashboard.function.functionOndemandInstance': '函数按量实例数(个)',
  'fc.dashboard.function.functionProvisionedInstanceCountLimit': '函数按量实例上限',
  'fc.dashboard.function.functionProvisionedInstanceCountCurrent': '函数已使用按量实例数',
  'fc.dashboard.function.functionProvisionedInstanceCount': '函数预留实例数(个)',
  'fc.dashboard.function.functionProvisionedCurrentInstanceCount': '函数预留实例数',
  'fc.dashboard.function.functionProvisionedAlreadyCurrentInstance': '函数已使用实例总数',
  'fc.dashboard.function.regionOndemandInstance': '区域按量实例数(个)',
  'fc.dashboard.function.regionProvisionedInstanceCountLimit': '区域按量实例上限',
  'fc.dashboard.function.regionProvisionedInstanceCountCurrent': '区域已使用按量实例数',
  'fc.dashboard.function.serviceConcurrentInstance': '服务按量实例数(个)',
  'fc.dashboard.function.serviceConcurrentTol': '服务已使用按量实例数',
  'fc.guide.hello.deploy.package': '代码打包',
  'fc.guide.hello.deploy.upload': '上传代码',
  'fc.guide.hello.deploy.deploy': '部署代码',
  'fc.overview.support.nodejs': '',
  'fc.overview.support.python': '',
  'fc.overview.support.powershell': '',
  'fc.overview.support.lua': '',
  'fc.overview.support.rust': '',
  'fc.overview.support.ruby': '',
  'fc.overview.support.dart': '',
  'fc.overview.support.typescript': '',
  'fc.overview.support.acr_docker': '',
  'fc.overview.support.java': '',
  'fc.overview.support.fsharp': '',
  'fc.overview.support.go': '',
  'fc.overview.endpoint.label': '',
  'fc.overview.runtime': '',
  'fc.dashboard.function.chart.': '最大消耗内存',
  'fc.dashboard.requset.span': 'Span名称',
  'fc.dashboard.requset.timeaxios': '时间轴(单位:毫秒)',
  'fc.dashboard.requset.application': '应用名',
  'fc.dashboard.requset.logAppearTimes': '日志产生时间',
  'fc.dashboard.requset.ipAddress': 'IP地址',
  'fc.dashboard.requset.status': '状态',
  'fc.dashboard.requset.wasteTimes': '耗时',
  'fc.dashboard.function.provisionedInstance': '',
  'fc.dashboard.function.functionUsage': '资源使用量(MB*ms)',
  'fc.dashboard.function.functionUseageInfo': '使用量',
  'fc.dashboard.function.ondemandInstance': '按量实例数(个)',
  'fc.dashboard.function.activeInstance': '实例个数',
  'fc.dashboard.function.instanceLimit': '实例上限',
  'fc.dashboard.function.provisionedInstanceCount': '预留实例数(个)',
  'fc.dashboard.function.activeProvisionedInstanceCount': '已使用预留实例数',
  'fc.dashboard.function.currentInstance': '预留实例数',
  'fc.dashboard.function.currentInstance.count': '预留实例数',
  'fc.dashboard.function.alreadyCurrentInstance': '已使用实例总数',
  'fc.dashboard.function.functionProvisionedInstanceUtilization': '预留实例利用率',
  'fc.dashboard.function.memory.max.label': '最大消耗内存',
  'fc.dashboard.exec.time.max.label': '最大耗时',
  'fc.dashboard.exec.time.avg.label': '平均耗时',
  'fc.dashboard.exec.time.latency.max.label': '最大延迟',
  'fc.dashboard.exec.time.latency.avg.label': '平均延迟',
  'fc.dashboard.function.isColdStart.yes': '冷启动',
  'fc.dashboard.function.isColdStart': '冷启动情况',
  'fc.dashboard.function.memoryUsageMB': '内存使用(MB)',
  'fc.dashboard.function.durationMs': '执行时间(ms)',
  'fc.dashboard.function.time': '请求时间',
  'fc.dashboard.function.requestId': 'Request ID',
  'fc.dashboard.function.table.search.placeholder': '可按照 Request ID 进行模糊搜索',
  'fc.dashboard.service.FunctionTotalInvocations': '调用次数',
  'fc.dashboard.service.FunctionThrottles': '流控次数',
  'fc.dashboard.service.FunctionServerErrors': '服务端错误',
  'fc.dashboard.service.FunctionClientErrors': '客户端错误',
  'fc.dashboard.service.FunctionFunctionErrors': '函数错误',
  'fc.dashboard.service.table.search.placeholder': '可按照函数名称进行模糊搜索',
  'fc.dashboard.service.functionName': '函数名称',
  'fc.dashboard.region.ServiceTotalInvocations': '调用次数',
  'fc.dashboard.region.ServiceThrottles': '流控次数',
  'fc.dashboard.region.ServiceServerErrors': '服务端错误',
  'fc.dashboard.region.ServiceClientErrors': '客户端错误',
  'fc.dashboard.region.serviceName': '服务名称',
  'fc.dashboard.region.table.search.placeholder': '可按照服务名称进行模糊搜索',
  'fc.dashboard.function.memory.title': '内存消耗',
  'fc.dashboard.traffic.control.error.title': '流控错误(个)',
  'fc.dashboard.traffic.control.total.label': '实例总数超上限',
  'fc.dashboard.traffic.control.concurrent.label': '并发实例超上限',
  'fc.dashboard.concurrent.title': '并发实例数(个)',
  'fc.dashboard.concurrent.count.label': '并发实例数',
  'fc.dashboard.concurrent.max.label': '并发实例上限',
  'fc.dashboard.function.error.title': '函数错误',
  'fc.dashboard.function.error.timeout.label': '执行超时',
  'fc.dashboard.function.error.oom.label': '内存溢出',
  'fc.dashboard.function.error.other.label': '其他错误',
  'fc.dashboard.exec.time.title': '时间消耗',
  'fc.dashboard.unit.count': '次',
  'fc.dashboard.function.exec.count.label': '函数执行(次)',
  'fc.dashboard.time.5.minute': '最近5分钟',
  'fc.dashboard.time.15.minute': '最近15分钟',
  'fc.dashboard.time.30.minute': '最近30分钟',
  'fc.dashboard.time.60.minute': '最近1小时',
  'fc.dashboard.time.six.hours': '最近6小时',
  'fc.dashboard.function.provisionedInstanceCount.limit': '按量实例上限',
  'fc.dashboard.function.provisionedInstanceCount.current': '已使用按量实例数',
  'fc.gb.s': 'GB-秒',
  'fc.guide.todo.chart1': '调用次数（次）',
  'fc.guide.todo.chart2': '内存消耗（MB）',
  'fc.guide.todo.chart3': '函数执行时间（ms）',
  'fc.guide.todo.chart4': '服务端错误（次）',
  'fc.guide.todo.chart5': '客户端错误（次）',
  'fc.guide.todo.chart6': '函数错误（次）',
  'time.diff.uinit.day': 'day',
  'time.diff.uinit.hour': 'hour',
  'time.diff.uinit.minute': 'min',
  'time.diff.uinit.days': 'days',
  'time.diff.uinit.hours': 'hours',
  'time.diff.uinit.minutes': 'mins',
  'time.diff.uinit.second': 's',
  'time.diff.uinit.millisecond': 'ms',
  'time.diff.uinit.seconds': 's',
  'time.diff.uinit.milliseconds': 'ms',
  'fc.dashboard.success.label': '调用次数',
  'fc.dashboard.server.error.label': '服务端错误',
  'fc.dashboard.client.error.label': '客户端错误',
  'fc.dashboard.function.error.label': '函数错误',
  'fc.dashboard.dateRange.max.error': '最大时间间隔不能超过 {max} 天',
  'fc.dashboard.dateRange.min.error': '最小时间间隔不能小于 {min} 分钟',
  'fc.dashboard.nav': '监控中心',
  'fc.dashboard.execution.status': '执行状态',
  'fc.dashboard.status.code': '状态码',
  'fc.dashboard.status.is.coldStart': '是否冷启动',
  'fc.dashboard.function.execution.time': '函数执行时间',
  'fc.dashboard.memory.consumption': '消耗内存',
  'fc.dashboard.request.detail': '请求详情',
  'fc.dashboard.function.call.chain': '函数调用链',
  'fc.dashboard.call.chain.time_line': '调用链时间线',
  'fc.dashboard.time.axis': '时间轴(ms)',
  'fc.dashboard.log': '日志',
  'fc.dashboard.yse': '是',
  'fc.dashboard.no': '否',
  'fc.dashboard.success': 'Success',
  'fc.dashboard.function.asyncEvent.label': '异步调用触发事件(个)',
  'fc.dashboard.destination.asyncEventExpiredDropped.label': '超时丢弃',
  'fc.dashboard.destination.error.label': '目标触发失败',
  'fc.dashboard.function.destination.succeed.label': '目标触发成功',
  'fc.dashboard.function.open.request.metrics': '推荐您开通RequestMetrics以便查询函数级别指标',
  'fc.dashboard.function.open.request.metrics.attention': '注：开通请求级别指标会自动帮您配置日志，日志服务为付费服务，计费详情请参考',
  'fc.dashboard.function.payment.info': '费用说明',
  'fc.dashboard.allCount.lable': '函数总调用',
  'fc.dashboard.singletonCount.lable': '基于预留实例的调用',
  'fc.dashboard.functionConcurrentCount.lable': '按量实例数',
  'fc.dashboard.functionProvisionCurrentCountMax.lable': '预留实例数',
  'fc.dashboard.functionAvgDuration.lable': '平均时间',
  'fc.dashboard.functionMaxDuration.lable': '最大时间',
  'fc.dashboard.functionLatencyAvg.lable': '平均延时',
  'fc.dashboard.functionLatencyMax.lable': '最大延时',
  'fc.dashboard.functionCallCount.lable': '调用次数(次)',
  'fc.dashboard.functionErrocCount.lable': '错误次数(次)',
  'fc.dashboard.flowControlCount.lable': '流控错误(次)',
  'fc.dashboard.concurrentcyCount.lable': '并发实例数(个)',
  'fc.dashboard.n2nduction.lable': '端到端延时(ms)',
  'fc.dashboard.provision3.lable': '并发实例数(个)',

  // 远程调试开始
  'fc.remote_debug.title': 'Remote debugging',

  'fc.remote_debug.call': 'Make a call',
  'fc.remote_debug.turnoff': 'Turn off debugging',
  'fc.remote_debug.start': '',
  'fc.remote_debug.start_debug': 'Turn on debugging',
  'fc.remote_debug.step1': 'When remote debugging, you can set the function timeout time longer to maintain a more persistent connection',
  'fc.remote_debug.step2': 'When debugging is turned on for the first time, it involves a cold start, and it will take longer to turn on the debugger. Please be patient',
  'fc.remote_debug.step3': 'After debugging, click "Close debugging"',

  // 远程调试结束
  'fc.function.new_create.title': '您可通过三种方式，快速创建函数。',

  'fc.function.new_create.succeed.jump': '<a class="mockAStyle">{time}s</a> 后将为您跳转到函数编辑页面，接下来您可以：<br/>1. 编辑函数；2. 触发函数；3. 设置触发器；4….拯救宇宙？',
  'fc.new_create.service.name.title.describe': '请先创建一个服务，然后在该服务下添加函数。',
  'fc.new_create.service.name.placeholder': '由字母、数字、下划线和中划线组成，不以数字、中划线开头',
  'fc.create.service.bindLog_tip.cost': '日志服务会收取少量费用，详见 ',
  'fc.new_create.service.title.guide': '欢迎使用函数计算！以下内容将帮助您完成第一个函数的建立，大约需要2分钟。',
  'fc.service.fliter.key_placeholder': '请输入关键字',
  'fc.applications.monitor.delay.tip': '监控指标有延时，如果时间范围在 12 小时内，数据按分钟粒度聚合，延时在 5 分钟左右；如果时间范围超过 12 小时，数据按小时粒度聚合，延时在 1 小时以内。',
  'fc.applications.updateApp.tip': '更新应用之后需要再次发布版本才能生效。',
  'fc.applications.update.port.tip': '更新启动命令和端口号必须重新部署一次代码包才能生效',

  'fc.applications.update.upziploading.tip':
    '正在重新打包文件，预计需要 1-3 分钟，该任务已进任务队列，您可以进行其他操作，无需等待',

  'fc.applications.update.notclonse.tip': '当前阶段请不要关闭页面，页面数据丢失',
  'fc.applications.redis.instanceClass.label': '{size} 主从版',
  'fc.service.details.rds.status': '运行状态',
  'fc.service.details.rds.create_time': '创建时间',
  'fc.service.details.rds.zoneId': '所在地区',
  'fc.applications.log.context.title': '',
  'fc.applications.log.table.log_time': '',
  'fc.applications.log.table.message': '',
  'fc.applications.log.table.operate': '',
  'fc.applications.log.table.expand': '',
  'fc.applications.web.details.log.title': '',
  'fc.applications.monitor.overview.error_details.expand': '',
  'fc.applications.monitor.overview.error_details.log_time': '',
  'fc.applications.monitor.overview.error_details.message': '',
  'fc.applications.monitor.overview.error_details.operate': '',
  instanceConcurrency: '',
  'fc.region.cn-huhehaote': '',
  'fc.region.cn-hongkong': '',
  'fc.region.cn-chengdu': '成都',
  'fc.region.ap-northeast-1': '',
  'fc.region.us-west-1': '',
  'fc.region.ap-southeast-1': '',
  'fc.function.search.title': '',
  'fc.linkEdge.action.delete': '删除',
  'fc.cname.cert.required': '',
  'fc.function.code_edit.oss.upload': '',
  'fc.function.code_edit.oss.download': '',
  'fc.function.code_edit.api.operation': '',
  'fc.function.runtime.dotnetcore.help': '',
  'fc.function.runtime.container.mirror': '镜像加速',
  'fc.function.runtime.container.open': '开',
  'fc.function.runtime.container.close': '关',
  'fc.function.runtime.container.mirror.tip': '开启镜像加速将会将镜像转存在函数计算的安全镜像加速存储中，<a href="https://www.alibabacloud.com/help/doc-detail/193075.htm" target="#">详情参考</a>',
  'fc.region.eu-central-1': '',
  'fc.region.ap-southeast-5': '',
  'fc.mns_trigger.notifyStrategy.label.prefix': '请参考',
  'fc.mns_trigger.notifyStrategy.label.suffix': '重试策略相关文档',
  'fc.trigger.tablestore.edit.tip': 'OTS触发器不能修改!',
  'fc.trigger.mns.edit.tip': 'MNS触发器不能修改!',
  'fc.dialog.title.common': '标题',
  'fc.ove《rview.function.template.detail.label': '',
  'fc.function.trigger.authoration.required.error': '',
  'fc.rds_trigger.table.value.check.required': '',
  'fc.rds_trigger.input_value.required': '',
  'fc.function.trigger_name.check.error': '',
  'fc.function.trigger_name.check.catch': '',
  'fc.trigger_internal.min': '',
  'fc.create_trigger.role.create.mode.exist': '',
  'fc.create_trigger.role.create.mode.new': '',
  'fc.rds.not_active.title': 'RDS 没有激活，点击激活按钮，激活完成点击刷新页面。',
  'fc.mns_trigger.source.region.label': 'MNS Topic 所在区域',
  'fc.mns_trigger.topic.placeholder': '',
  'fc.mns_trigger.topic.required': '',
  'fc.trigger.migration.required': '',
  'fc.create_trigger.trigger_name.exist.error': '',
  'fc.create_trigger.trigger_name.error.retry': '',
  'fc.create_trigger.trigger_function_config.placeholder': '请检查是否符合kv格式的JSON',
  'fc.create_trigger.trigger_log_store_repeat': '',
  'fc.authoration.required': '',
  'fc.http_trigger.method.required': '',
  'fc.time_trigger.cron_generater.mondays': '',
  'fc.time_trigger.cron_generater.tuesdays': '',
  'fc.time_trigger.cron_generater.wednesday': '',
  'fc.time_trigger.cron_generater.thursdays': '',
  'fc.time_trigger.cron_generater.fridays': '',
  'fc.time_trigger.cron_generater.saturdays': '',
  'fc.time_trigger.cron_generater.sundays': '',
  'fc.time_trigger.cron_generater.day_of_week': '',
  'fc.time_trigger.cron_generater.day_of_month': '',
  'fc.time_trigger.cron_generater.month': '',
  'fc.time_trigger.cron_generater.every_day': '',
  'fc.time_trigger.cron_generater.mon_to_fri': '',
  'fc.time_trigger.cron_generater.sar_to_sun': '',
  'fc.time_trigger.cron_generater.every_month_day': '',
  'fc.time_trigger.cron_generater.label.every': '',
  'fc.time_trigger.cron_generater.label.on': '',
  'fc.time_trigger.cron_generater.january': '',
  'fc.time_trigger.cron_generater.february': '',
  'fc.time_trigger.cron_generater.march': '',
  'fc.time_trigger.cron_generater.april': '',
  'fc.time_trigger.cron_generater.may': '',
  'fc.time_trigger.cron_generater.june': '',
  'fc.time_trigger.cron_generater.july': '',
  'fc.time_trigger.cron_generater.auguest': '',
  'fc.time_trigger.cron_generater.september': '',
  'fc.time_trigger.cron_generater.october': '',
  'fc.time_trigger.cron_generater.november': '',
  'fc.time_trigger.cron_generater.december': '',
  'fc.time_trigger.cron_generater.every_month': '',
  'fc.time_trigger.cron_generater.create.button': '',
  'fc.time_trigger.cron_generater.title': '',
  'fc.time_trigger.cron_generater.func.periodically': '',
  'fc.time_trigger.cron_generater.func.frame': '',
  'fc.time_trigger.cron_generater.frame.startTime': '',
  'fc.time_trigger.cron_generater.frame.endTime': '',
  'fc.time_trigger.cron_generater.func.fixed': '',
  'fc.time_trigger.cron_generater.label.at': '',
  'fc.update_trigger.loading': '',
  'fc.blank_project': '',
  'fc.cancle': '取消',
  'fc.service.height_config.project_required': '',
  'fc.service.height_config.log_store.required': '',
  'fc.service.height_config.role.required': '',
  'fc.initializationTimeout.tooltip': '',
  'fc.function.code.upload.mode.oss.object.exist': '',
  'fc.function.code.upload.mode.oss.object.error': '',
  'fc.nas_config.mounts.point': 'NAS挂载点',
  'fc.nas_config.mounts.remote_dir': '远端目录',
  'fc.nas_config.mounts.local_dir': '本地目录',
  'fc.service.nas_config.dir.placeholder': '',
  'fc.nas-config.mountPoints.required': '',
  'fc.service.nas_config.domain.placeholder': 'Please input mount domain.',
  'fc.service.nasConfig.userId.required': '',
  'fc.nas.not_open.help': '',
  'fc.service.nas_config.user_id.showValue': 'asdasdasdsad',
  'fc.nas_config.groupId.placeholder': '',
  'fc.service.nas_config.group_id.showValue': 'sadfsafasdfasdfasdfdsf',
  'fc.nas.not.allow.config.tooltip': '请先首先设置专有网络。',
  'fc.overview.service.create.logStore.required': '',
  'fc.overview.service.create.projectName.required': '',
  'fc.authoration.cancle': '',
  'fc.function.attribute.function_timeout.check': '',
  'fc.function.function_code.check_object.error': '请输入已经存在的存储对象。',
  'fc.initializer.switch.help': '',
  'fc.initializer.help.more.article.tip': '',
  'fc.region.cn-qingdao': '',
  'fc.region.cn-beijing': '',
  'fc.region.cn-hangzhou': '',
  'fc.region.cn-shanghai': '',
  'fc.region.cn-shenzhen': '',
  'fc.region.ap-southeast-2': '',
  'fc.region.ap-south-1': '',
  'fc.region.us-east-1': '',
  'fc.region.cn-zhangjiakou': '',
  'fc.service.type.rds': '',
  'fc.service.type.ots': 'TableStore Trigger',
  'fc.service.type.mns': '',
  'fc.version.manage.label': '',
  'fc.version.operate.label': '',
  'action.create.button': 'the creation of',
  'action.next_step': 'the next step',
  'action.pre_step': 'the previous step',
  'all.bucket.resource': 'all objects with resources under the bucket',

  'all.bucket.resource.placeholder':
    'the default policy is a resource for *, you can also Choose to limit the object permissions size',

  'all.instance.resource': 'examples of all of the data under the table resource',

  'all.instance.resource.placeholder':
    'default policy resource for *, you can also choose to form limited permission granularity',

  'all.log.resource': 'all log log service project resources',

  'all.log.resource.placeholder':
    'default policy resource for *, you can also choose to log engineering limited permission granularity',

  'all.oss.resource': 'the Object of all the bucket storage resources',

  'all.oss.resource.placeholder':
    'default policy resource for *, you can also Choose the bucket size limitations permissions',

  'all.ots.resource': 'table storage all examples of resources',

  'all.ots.resource.placeholder':
    'the default policy resource for *, you can also choose strength limit permission granularity',

  'all.project.resource': 'log all log storage resources under the item',

  'all.project.resource.placeholder':
    'default policy resource for *, you can also choose to log storage limit permission granularity',

  'app.check': 'success',
  'fc.mns.not_active.title': '{product} 没有激活，点击激活按钮，激活完成点击刷新页面。',
  'bucket_name.label': 'the bucket list:',
  'fc.mns_trigger.regionId.requred': '请输入地域信息。',
  'fc.vpc.transfer.title': 'VPC迁移说明',

  'config.log_store.help':
    'function push function log to the project (Project) under the log database (Logstore). please see the details',

  'config.log_store.placeholder_unit': 'log console',

  'config.project_name.placeholder':
    'function to push the function of log to the same region corresponding to the current user log service (project). please see the details',

  'config.project_name.placeholder_unit': 'log console',
  'creating.loading': 'created in...',
  'fc.action.create.button': 'Create',
  'fc.action.next_step': 'Next',
  'fc.action.pre_step': 'Previous',
  'fc.actions.label': 'Events:',
  'fc.actions.placeholder': 'Select trigger events.',
  'fc.actions.required': 'Trigger event cannot be blank.',
  'fc.actions.tooltip': 'FC function will be invoked if selected events happen.',
  'fc.all.bucket.resource': 'All objects under the bucket.',

  'fc.all.bucket.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at object granularity.',

  'fc.all.instance.resource': 'All tables under the instance.',

  'fc.all.instance.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at table granularity.',

  'fc.all.log.resource': 'All Log Service projects.',

  'fc.all.log.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at Log Service project granularity.',

  'fc.all.oss.resource': 'All OSS buckets',

  'fc.all.oss.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at bucket granularity.',

  'fc.all.ots.resource': 'All instance resources of the Table Store.',

  'fc.all.ots.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at instance granularity.',

  'fc.all.project.resource': 'All log repository resources in the log project.',

  'fc.all.project.resource.placeholder':
    'the default policy sets Resource to be *, you can also choose to restirct access at LogStore granularity.',

  'fc.authoration.bucket.all.select': 'Select All',

  'fc.authoration.confirm':
    'Make sure all required permissions are granted to the specified service role.',

  'fc.authoration.function.template.not_need_authoration':
    'This function template does not need to grant any permission.',

  'fc.authoration.logstore.message':
    'Select a Log Service project if you need to authorize FC to push log to your logstore.',

  'fc.authoration.notice.not_success':
    'Grant necessary permissions to access cloud resources used in code. Skip this step if the function does not need to access other cloud resources.',

  'fc.authoration.notice.sucess': "You have been authorized. You can click “X' to re-authorize.",
  'fc.authoration.operation.anew': 'You can re-authorize.',
  'fc.authoration.role.not_has.policy.message': 'The specified role does not have any policy.',

  'fc.authoration.service.build.role.message.base':
    'The new service role will be authorized based on the selected system template.',

  'fc.authoration.service.build.role.message.success':
    "Click 'Restore' to use the role that has been authorized.",

  'fc.authoration.service.role.feedback': 'Grant all the permissions required for this function.',
  'fc.authoration.service.role.info': 'Service Role authorizes FC to access other cloud resources.',
  'fc.authoration.service.role.manage': 'Service role management',

  'fc.authoration.service.role.success':
    "Click 'Restore' to use the role that has been authorized.",

  'fc.authoration.service_exist_role.message.base':
    'For function that requires to access cloud resources, select one or more system policy templates and authorize FC to assume the role.',

  'fc.authoration.success': 'Successfully authorized.',

  'fc.authoration.system.role.message':
    'If function requires to access other resources, select one or more system policies to be attached to the service role.',

  'fc.authoration.system.role.title': 'System policy authorization',
  'fc.authoration.system.template': 'System Policies',
  'fc.authoration.system.template.required': 'System policy cannot be blank.',
  'fc.authoration.system.template.select': 'Select system policies.',
  'fc.authoration.table.select': 'Select All',
  'fc.authoration.to.the.logstore.required': 'Authorize FC to push logs to a specified LogStore.(',
  'fc.authoraton.instance.select': 'Select All',
  'fc.blank_log_store': 'Select LogStore',
  'fc.blank_project_name': 'Select Project',
  'fc.bucket_name': 'OSS Bucket:',
  'fc.bucket_name.label': 'Bucket',
  'fc.bucket_name.placeholder': 'Select a bucket name',
  'fc.bucket_name.required': 'Bucket cannot be blank',

  'fc.bucket_name.tooltip':
    'Select an OSS bucket as the event source. Only buckets of the same region are listed.',

  'fc.build.new.trigger.role': 'New Trigger Roles(',
  'fc.button.create.label': 'Create',
  'fc.checking': 'Verifying...',
  'fc.code.checksum': 'Code Checksum',

  'fc.config.log_store.help':
    'FC pushes function log to LogStore under the Log Service project. See details here',

  'fc.config.log_store.placeholder_unit': 'Log Service console',

  'fc.config.project_name.placeholder':
    'FC pushes the function logs to the corresponding Log Service project within the same region. For details. See',

  'fc.config.project_name.placeholder_unit': 'Log Service console',
  'fc.create.complete': 'Successfully Created.',
  'fc.create_time': 'Created Time',

  'fc.create_trigger.log.feedback':
    'To create Log Service triggers, you need to activate Log Service first.',

  'fc.create_trigger.oss.feedback': 'To create OSS triggers, you need to activate OSS first.',
  'fc.creating.loading': 'Creating...',
  'fc.default': 'Default',
  'fc.edit.button.sure': 'OK',
  'fc.edit.func.code.copy': 'click and copy code.',
  'fc.edit.func.template.copy': 'Copy Template',
  'fc.edit.func.template.func': 'Functionality',
  'fc.edit.func.template.language': 'language',
  'fc.edit.func.template.product': 'Cloud Services',
  'fc.edit.mode.config': 'Editor Settings',
  'fc.edit.mode.placeholder': 'Select an editing mode',
  'fc.edit.mode.required': 'Editing mode cannot be blank.',
  'fc.edit.mode.style': 'Editor Layout',
  'fc.edit_mode.skin.color.black': 'Monokai',
  'fc.edit_mode.skin.color.white': 'Github',
  'fc.edit_template.full.screen.help': "Press 'ESC' to exit full screen.",
  'fc.edit_template.op.base': 'Basic Configurations',
  'fc.edit_template.op.download': 'Download',
  'fc.edit_template.op.upload': 'Upload',
  'fc.edit_template.product.api': 'API Gateway',
  'fc.http_trigger.document': 'Http Document',
  'fc.postman.fileupload.warning': 'Please select a file.',
  'fc.edit_template.product.oss': 'OSS',

  'fc.event.rule.help':
    'We strongly recommend that you set the prefix or suffix. No duplicated prefixes or suffixes are allowed for different triggers in the same bucket.',

  'fc.event.rule.label': 'Trigger Rule:',
  'fc.event.rule.prefix': 'Prefix',
  'fc.event.rule.suffix': 'Suffix',
  'fc.event.rule.tooltip': 'Prefix and suffix of the object name.',
  'fc.exist_role.authoration.required': 'Existing service role cannot be blank.',

  'fc.exist_role.tooltip':
    'Make sure that the role selected can be assumed by OSS and has permission to call the function.',

  'fc.file.compressed': 'Compressed',
  'fc.file.compressing': 'Compressing',
  'fc.file_upload': 'upload file.',
  'fc.form_file_upload.label': 'form upload',
  'fc.http.trigger.authoration.type.no_authoration': 'No Authoration',
  'fc.http.trigger.authoration.type.authoration': 'Authoration',
  'fc.file_upload.selected_file': 'Selected File',

  'fc.file_upload.size_over':
    'Selected file {fileName} is of size {fileSize}. The upload file size cannot exceed {size}.',

  'fc.file_upload.success.tooltip':
    'The file has been uploaded. You can re-select file to update function.',

  'fc.file_upload.suffix.error': 'Invalid suffix ({fileName}), the suffix should be {suffix}.',
  'fc.file_upload.tool': 'CLI',
  'fc.file_upload.tooltip': 'Upload a .zip or .jar file up to 5 MB. Use ',
  'fc.file_upload.with_out_file': 'No file has been selected.',
  'fc.folder.file.not.find': 'No handler function was found in the specified folder.',
  'fc.folder.file.upload': 'Maximum folder size is 250MB, select a smaller folder and try again.',
  'fc.folder.select': 'Select Folder',

  'fc.folder.select.message':
    'Select a folder that contains the function code. Console will zip it for you automatically.',

  'fc.func.copy': 'Click to copy: {endpoint}',
  'fc.func.copy.lebel': 'Click to Copy',
  'fc.func.copy.success': 'Copied in clipboard.',
  'fc.func.private.endpoint': 'Intranet Endpoint',
  'fc.func.public.endpoint': 'Internet Endpoint',
  'fc.func.service_num.label': 'Number of Services:',
  'fc.func.service_num.unit': '\\u0020\\',
  'fc.func.template.api_gateway_nodejs6': 'API Gateway Back-end',

  'fc.func.template.api_gateway_nodejs6.desc':
    'As back-end implementation of API Gateway, FC returns response to API Gateway in different way, including HTML, JSON and images.',

  'fc.func.template.get_object_meta': 'OSS Object Information',

  'fc.func.template.get_object_meta.desc':
    'When file with specified prefix or suffix is uploaded to OSS bucket, this template triggers function to get and store metadata into OSS.',

  'fc.func.template.image_crawler': 'Image Crawler',

  'fc.func.template.image_crawler.desc':
    'FC uses provided URL, automatically crawls all the images with specific name from the website and store output in OSS.',

  'fc.func.template.image_recognition': 'Image Classification',

  'fc.func.template.image_recognition.desc':
    'This template allows you to trigger image recognition and classification in response to OSS image uploading events.',

  'fc.func.template.logstore_replication': 'Log Service Replication',

  'fc.func.template.logstore_replication.desc':
    'This template subscribes one log store stream and copy to another log store.',

  'fc.func.template.marketplace_weather_demo': 'Weather Report',

  'fc.func.template.marketplace_weather_demo.desc':
    'This template provides cloud market services through FC, including weather report, air quality report and dressing index.',

  'fc.func.template.oss_download_zip_upload': 'Image Packing',

  'fc.func.template.oss_download_zip_upload.desc':
    'This template allows you to download images from an OSS bucket and compress it to a .zip. The .zip file is upload to templates in specified buckets.',

  'fc.func.template.oss_shipper_csv': 'Log Shipper',

  'fc.func.template.oss_shipper_csv.desc':
    'This template subscribes log store stream, create csv files with configured fields and store in OSS.',

  'fc.func.template.read_write_tablestore_nodejs6': 'Table Store Trigger',

  'fc.func.template.read_write_tablestore_nodejs6.desc':
    'Seamlessly read and write table store through FC.',

  'fc.function.authoration': 'Permission Configuration',
  'fc.function.authoration.button': 'Authorize',
  'fc.function.authoration.config.title': 'Permission Configuration',

  'fc.function.authoration.jump.warning':
    'Make sure that all permissions required in the template can be found in the service role before redirecting. Otherwise the function execution will fail.',

  'fc.function.authoration.policy.with': 'Corresponding permissions',
  'fc.function.authoration.role.has.policy': 'Permissions granted or to be granted.',
  'fc.function.authoration.role.show': 'Role',

  'fc.function.authoration.service_role.title':
    'Service Role Information (authorizes FC to access other resources)',

  'fc.function.authoration.title': 'Service Role Management',

  'fc.function.batch.delete_function.help':
    'Are you sure to delete this function? Make sure that no triggers exist under the function.',

  'fc.function.batch_delete.confirm':
    'Are you sure to delete function in batch? Make sure that no triggers exist under selected functions.',

  'fc.function.code.upload.oss.inactive':
    'You must activate OSS first before you can use it to upload.',

  'fc.function.code.upload.oss.inactive.help':
    'Please activate OSS, specify a valid bucket and object to import code package from OSS to FC.',

  'fc.function.code_size': 'Code Size (Bytes)',
  'fc.function.code_size.unit': 'Byte',
  'fc.function.code_upload.bucket': 'Bucket Name',
  'fc.function.code_upload.bucket.placeholder': 'Select a bucket.',
  'fc.function.code_upload.bucket.required': 'The bucket name cannot be blank.',
  'fc.function.code_upload.error.size_limit': 'File size cannot exceed 5MB.',
  'fc.function.code_upload.label': 'Select code',
  'fc.function.code_upload.mode.edit': 'In-line Edit',
  'fc.function.code_upload.mode.local': 'Select File',
  'fc.function.code.name.tip': '以字母开头，可包含数字、字母（大小写敏感）、下划线和中划线，长度小于64个字符',
  'fc.http_trigger.authoration.tooltip': 'Refresh this page of authorization',
  'fc.function.code_upload.mode.oss': 'Import from OSS',
  'fc.function.code_upload.mode.select_file': 'Select a file',
  'fc.function.code_upload.object': 'Object Name',
  'fc.function.code_upload.object.error': 'An error occurred while uploading please try again.',
  'fc.function.code_upload.object.help': 'Only a zip or jar file can be uploaded',
  'fc.function.code_upload.object.placeholder': 'Enter an object name.',
  'fc.function.code_upload.object.required': 'The object cannot be blank.',
  'fc.function.code_upload.object_not_exist': 'The object does not exist.',
  'fc.function.config.code.base.info': 'Function Information',
  'fc.function.config.code.base.service': 'Service Name',
  'fc.function.config.code.base.service.placeholder': 'Select a service',
  'fc.function.config.code.function_type': '函数类型',
  'fc.function.config.code.function_type.extra': '更换类型',
  'fc.function.config.code.advanced': '展开高级设置',
  'fc.function.config.code.advanced.close': '收起高级设置',
  'fc.function.config.code.upload.mode.template': '使用示例代码',
  'fc.function.config.code.custom.not.event': '暂不支持 event 函数示例',
  'fc.function.config.code.custom.not.http': '暂不支持 http 函数示例',
  'fc.function.config.code.not.java_dot_custom': '此地区暂不支持 Java、Dotnetcore、Custom 示例。',
  'fc.function.config.code.custom.tip': '您可以使用示例代码体验自定义运行环境支持的多种语言',
  'fc.function.config.code.check_bucket.catch': 'An error occurred while uploading, please try again.',
  'fc.function.config.code.check_bucket.error': 'The bucket does not exist, please re-enter.',
  'fc.function.config.code.check_object.error': 'The object does not exist, please re-enter',
  'fc.function.config.code.config.label': 'Code Configuration',
  'fc.function.config.code.document': 'Documents',

  'fc.function.config.code.log.prepared':
    'Ignore this because Log Service has prepared the code for you.',

  'fc.function.config.code.next_step.feedback':
    'Enter or select the proper data according to the error message.',

  'fc.function.config.code.runtime.config': 'Runtime Environment',
  'fc.function.config.code.title': 'Basic Management Configuration',
  'fc.function.config.code.upload.mode': 'Upload Code',
  'fc.function.config.update.success': '函数配置修改已保存',
  'fc.function.create_function.button': '新建函数',
  'fc.create.button': '新建',
  'fc.function.delete_function.button': 'Delete Function',
  'fc.function.description': 'Function Description',
  'fc.function.description.placeholder': 'Enter the function description.',
  'fc.function.description.tooltip': 'Describe the function.',

  'fc.function.folder.error':
    'An error occurred while compressing the folder, please double check.',

  'fc.function.folder.select.required': 'Select the directory to upload.',
  'fc.function.folder.upload.title': 'Upload Folder',

  'fc.function.folder.zip.not.success.message':
    'Your code is being compressed. Thank you for your patience.',

  'fc.function.handler': 'Function Handler',
  'fc.function.handler.error_message': 'The specified handler (handler:{handler}) is invalid.',
  'fc.function.handler.placeholder': 'Enter the function handler.',
  'fc.function.handler.required': 'The function handler cannot be empty.',

  'fc.function.handler.tooltip':
    "Handler is defined in the format of '[File name].[Method name]'. Handler 'index.handler' implies that index.py or index.js file contains a method called 'handler'. Follow this link for more information.",

  'fc.function.info.check': 'Verify Configurations',
  'fc.function.info_check': 'Preview',
  'fc.function.info_check.function.info': 'Function Information',
  'fc.function.info_check.trigger.info': 'Trigger Information',
  'fc.function.invoke.abstract.invoke_state': 'Status',
  'fc.function.invoke.abstract.invoke_time': 'Duration',
  'fc.function.invoke.abstract.memory': 'Max function memory allocated',
  'fc.function.invoke.abstract.memory_used': 'Memory',
  'fc.function.invoke.abstract.spend_time': 'Billing Duration',
  'fc.function.invoke.abstract.title': 'Summary',
  'fc.function.invoke.button': 'Invoke',

  'fc.function.invoke.code.handler_not_match':
    'The function code cannot be found because the handler ({handler}) of the function is not properly configured or the runtime ({runtime}) is inconsistent with the language in which the function is written.',

  'fc.function.invoke.code.save.label': 'Save',
  'fc.function.invoke.code.save_with_invoke.label': 'Save and Invoke',
  'fc.function.invoke.code.show.error.notice.title': 'Display Prompt',
  'fc.function.invoke.event.button': 'Event',
  'fc.function.invoke.event.button.help': "Click 'Event' button to configure test payload.",
  'fc.function.invoke.event.mode.oss': 'OSS Template',
  'fc.function.invoke.event.mode.user-defined': 'Custom',
  'fc.function.invoke.event.title': 'Test Event',
  'fc.function.invoke.fail': 'Failed',
  'fc.function.invoke.log.title': 'Logs',
  'fc.function.invoke.result.loading': 'Loading results...',
  'fc.function.invoke.result.title': 'Result',
  'fc.function.invoke.success': 'Succeeds',
  'fc.function.invoke.title': 'Code Management',
  'fc.function.operate.page': 'HttpTrigger Debugging',
  'fc.service.vpc_config.title': 'VPC Configs',
  'fc.service.vpc_config.switch.label': '允许函数访问 VPC 内资源',
  'fc.service.net_config.label': '网络配置',
  'fc.service.log_config.label': 'Log Config',

  'fc.role.vpc.binding_is_not_allowed':
    '服务缺少 AliyunVPCReadOnlyAccess 权限，或者当前地区不支持。',

  'fc.role.vpc.DescribeVpcAttribute': '服务缺少 AliyunVPCReadOnlyAccess 权限，请重新点击授权',
  'fc.service.authoration_config.label': 'Role Config',
  'fc.vpc_config.vpc_instance_id': 'VPC Instance ID',
  'fc.vpc_config.switch': 'Switchs',
  'fc.vpc_config.group': 'Security Group',
  'fc.vpc_config.public_net_reach': 'Public Network Reach',

  'fc.vpc_config.public_net.switch':
    'Your functions will lose internet access once VPC is enabled. Check the box to enable internet access within VPC.',

  'fc.vpc_config.vpc_id': 'VPC',
  'fc.vpc_config.vpc_id_required': 'VPC can not be empty.',

  'fc.vpc_config.vpc_id_tooltip':
    'Select a VPC to grant your functions access to the VPC resources.',

  'fc.vpc_config.vpc_id.placeholder': 'Select a VPC',
  'fc.vpc_config.create_service.title': 'vpcConfig',
  'fc.vpc_config.switch.required': 'Switchs can not be empty.',

  'fc.vpc_config.switch.tooltip':
    '函数服务会在您提供的交换机创建弹性网卡. 您的函数将通过弹性网卡访问您专有网络里面的资源',

  'fc.vpc_config.switch.placeholder': 'Select at least one VSwitch',
  'fc.vpc_config_bind.vpc_id': 'VPC Id',
  'fc.vpc_config_bind.vpc_name': 'VPC 名称',
  'fc.vpc_config_bind_config.switch.label': '仅允许指定 VPC 调用函数',
  'fc.role.vpc.binding_role_is_required': '服务权限不足，请重新授权',
  'fc.vpc_config_bind_config_bind_button': '绑定',
  'fc.vpc_config_bind_config_name.lable': '专有网络',
  'fc.vpc_config_bind_config_name.placeholder': '请选择专有网络',

  'fc.vpc.authoration.notice': '成功访问VPC还需要创建或者选择合适的已存在角色。新建方式：只需直接要点击授权按钮自动绑定符合要求的角色。已经存在方式：' +
    '所选择的角色最好包含AliyunECSNetworkInterfaceManagementAccess，如果没有可以直接点击按钮对已经存在的角色绑定该策略。',

  'fc.vpc_config.security_group': 'Security Group',
  'fc.vpc_config.security.required': 'Security GroupId can not be empty.',
  'fc.vpc.groupIdChange.show': 'Security GroupId can not be empty.',

  'fc.vpc_config.security_group.tooltip':
    'Select a security group to constrain the VPC access of your functions.',

  'fc.vpc_config.security_group.placeholder': 'Select a security group',
  'fc.vpc_config.internet_access': '允许函数访问公网',
  'fc.vpc_config.internet_access_true': '开',
  'fc.vpc_config.internet_access_false': '关',
  'fc.vpc_config.ingress_rule': 'Ingress',
  'fc.vpc_config.egress_rule': 'Egress',
  'fc.vpc_config.security_group.protocol': 'Protocol',
  'fc.vpc_config.security_group.port': 'Port Range',
  'fc.vpc_config.security_group.source': 'Source',
  'fc.vpc_config.security_group.destination': 'Destination',

  'fc.security_group_tooltip.help':
    '安全组出方向默认所有的访问，即从安全组内ECS访问外部都是放行的。',

  'fc.vpc_config.security_group.policy': 'Policy',
  'fc.function.sls.not_bind.tip': '推荐您开通日志服务(SLS)以便查询函数日志',
  'fc.function.sls.bind.btn': '一键开通',
  'fc.function.sls.auto_seach.tip': '每分钟自动刷新',
  'fc.function.sls.auto_seach.time.5': '5 分钟',
  'fc.function.sls.auto_seach.time.15': '15 分钟',
  'fc.function.sls.auto_seach.time.30': '30 分钟',
  'fc.function.sls.auto_seach.time.60': '1 小时',
  'fc.function.sls.auto_seach.time.360': '6 小时',
  'fc.function.sls.auto_seach.time.720': '12 小时',
  'fc.function.sls.auto_seach.time.0': '自定义',
  'fc.function.memory': 'Memory',
  'fc.function.memory.input': '手动输入',
  'fc.function.memory.select': '选择输入',
  'fc.function.memory.feedback': '更大内存反馈',
  'fc.function.memory.pattern': 'Only numbers are allowed.',
  'fc.function.memory.placeholder': 'Enter the memory requirement',
  'fc.function.memory.required': 'The memory requirement can not be empty.',
  'fc.function.memory_tooltip': 'Pick the amount of memory you function needs.',
  'fc.function.mode': 'Function Mode',
  'fc.function.mode.computer': 'Elastic Compute',
  'fc.function.modify_function.button': 'Edit',
  'fc.function.name': 'Function Name',
  'fc.function.name.check': 'The specified function name does not exist. Please double check',

  'fc.function.name.help':
    '1. Only letters, numbers, underscores (_), and hyphens (-) are allowed. <br/> 2. It cannot start with a number or hyphen. <br/> 3. The name must be 1 to 128 characters in length.',

  'fc.function.name.max': 'Function name cannot have more than 128 characters.',

  'fc.function.name.monitor.exception':
    'An error occurred while monitoring the function. Please try again.',

  'fc.function.name.pattern': 'Function name cannot start with number or hyphen.',
  'fc.function.name.placeholder': 'Enter a function name',
  'fc.function.name.required': 'The function name cannot be empty.',
  'fc.function.not_select': 'No function has been selected.',
  'fc.function.overview.function.code.download': 'Download Code',
  'fc.function.overview.function_attribute.title': 'Function Properties',
  'fc.function.overview.function_code.title': 'Code',
  'fc.function.overview.function_trigger.title': 'Triggers',
  'fc.function.overview.title': 'Overview',
  'fc.function.runtime': '运行环境',
  'fc.function.runtime.customs.label': '其他',
  'fc.function.update.expand': '函数扩展',
  'fc.function.pre_stop.open.label': '配置 PreStop 函数',
  'fc.function.pre_stop.handler': 'PreStop 入口函数',
  'fc.function.pre_stop.handler.placeholder': '配置 PreFreeze 函数入口后需实现对应的 PreFreeze 接口',
  'fc.function.pre_stop.handler.tip': 'PreStop 函数入口格式为 [文件名].[PreStop 函数名]。例如创建函数时指定的 PreStop 函数入口为 index.preStopHandler，那么文件名为 index.py，PreStop 函数为 preStopHandler。',
  'fc.function.pre_stop.timeout': 'PreStop 超时时间',
  'fc.function.pre_stop.timeout_1': '超时时间',
  'fc.function.pre_stop.timeout.placeholder': '配置 PreStop 超时时间',
  'fc.function.pre_freeze.open.label': '配置 PreFreeze 函数',
  'fc.function.pre_freeze.handler': 'PreFreeze 入口函数',
  'fc.function.pre_freeze.handler.tip': 'PreFreeze 函数入口格式为 [文件名].[PreFreeze 函数名]。例如创建函数时指定的 PreFreeze 函数入口为 index.preFreezeHandler，那么文件名为 index.py，PreFreeze 函数为 preFreezeHandler。',
  'fc.function.pre_freeze.handler.placeholder': '配置 PreFreeze 函数入口后需实现对应的 PreFreeze 接口',
  'fc.function.pre_freeze.timeout': 'PreFreeze 超时时间',
  'fc.function.pre_freeze.timeout_1': '超时时间',
  'fc.function.pre_freeze.timeout.placeholder': '配置 PreFreeze 超时时间',
  'fc.function.initializer.switch.label': '自定义配置（推荐）',
  'fc.function.update.environmentVariable.tab.label': '键值',
  'fc.timer.trigger.cron.label.prefix': 'Please refer to ',
  'fc.timer.trigger.cron.label.suffix': 'document of Cron.',

  'fc.function.runtime.java.help':
    "Handler is defined in the form of 'example.HelloFC::handleRequest'. Handler 'example.HelloFC::handleRequest' implies that HelloFC.java in package example contains a method called 'handlerRequest'.",

  'fc.function.runtime.nodejs.help':
    "Handler is defined in the format of '[File name].[Method name]'. Handler 'index.handler' implies that index.js file contains a method called 'handler'.",

  'fc.function.runtime.placeholder': 'Enter a runtime environment',

  'fc.function.runtime.python.help':
    "Handler is defined in the format of '[File name].[Method name]'. Handler 'index.handler' implies that index.py file contains a method called 'handler'.",

  'fc.function.runtime.required': 'Function language cannot be empty.',
  'fc.function.runtime.tooltip': 'Select the language in which your function is written.',
  'fc.function.step.authoration': 'Configure Function Permissions',
  'fc.function.step.function': 'Configure Function Settings',
  'fc.function.step.template': 'Function Template',
  'fc.function.step.trigger': 'Configure Triggers',
  'fc.function.template': 'Function Templates',

  'fc.function.template.authoration.error':
    'Please add all permissions required for function template execution.',

  'fc.function.template.blank_function.desc':
    'This template creates an empty function. You can follow the create function tutorial to setup trigger, configure permissions and develop code to make it work.',

  'fc.function.template.blank_function.name': 'Empty Function',

  'fc.function.template.description':
    'The templates provide sample function settings, trigger configurations and code for your reference. You can select a template close to your scenario and modify it or you can start with a blank template.',

  'fc.function.template.details': 'Template Details',
  'fc.function.template.language.all': 'Select All',
  'fc.function.template.loading': 'Loading templates...',
  'fc.function.template.number.quote.title': 'References: {number}',
  'fc.function.template.search.button': 'Search',
  'fc.function.template.search.placeholder': 'Search templates',
  'fc.function.template.select': 'Select',
  'fc.function.template.show_details': 'View Details',
  'fc.function.template.title': 'Select Function Template',
  'fc.function.template.trigger.config': 'Configure trigger role only. <br/>',
  'fc.function.timeout': 'Timeout',
  'fc.function.timeout.check': 'The timeout value cannot be greater than 10 minutes.',
  'fc.function.timeout.feedback': '更大时间反馈',
  'fc.function.timeout.max': 'The timeout value cannot be greater than 10 minutes.',
  'fc.function.timeout.pattern': 'Contains only numbers.',
  'fc.function.timeout.placeholder': 'Please specify a timeout value.',
  'fc.function.timeout.required': 'Timeout value cannot be empty.',

  'fc.function.timeout.tooltip':
    'Timeout defines the max amount of time a function can run. Function will fail if it cannot finish running within the configured timeout.',

  'fc.function.timeout.validate': 'The timeout value cannot be greater than 600 seconds.',
  'fc.function.trigger': 'Trigger Configurations',
  'fc.function.trigger.manage.title': 'Trigger Management',
  'fc.function.trigger.next_step.feedback': "Fields marked with a '*' are required.",
  'fc.function.trigger.next_step.warning': 'Please activate OSS before filling data.',
  'fc.function.trigger.not.create': 'No Trigger',
  'fc.function.trigger.table.action': 'Actions',
  'fc.function.update.title': 'Basic settings',
  'fc.function_code.mode.code_zip.upload': 'Upload Zip File',
  'fc.function_code.mode.folder.upload': '文件夹上传',
  'fc.function_list.detail.close.title': 'Hide Functions List.',
  'fc.function_list.detail.open.title': 'Show Functions List.',
  'fc.function_list.overview.title': 'Overview',
  'fc.function_logs.close.title': 'Close',
  'fc.function.overview.function_log.title': 'Log',
  'fc.nas_config.mount.dir': 'Mounts',
  'fc.nas_config.user_id': 'UserId',
  'fc.nas_config.user_id.placeholder': 'Please input user name',
  'fc.nas_config.groupId': 'GroupId',
  'fc.service.nas_config.title': 'Nas Config',
  'fc.service.netConfig.label': 'Net Config',
  'fc.function_list.search.placeholder': 'Search functions.',
  'fc.function_list.title': 'Functions',

  'fc.has.authoration.aliyun.respource':
    'Grant Function Compute to access the following resources.',

  'fc.has.authoration.ots.table.resource':
    'Grant Function Compute to access the following TableStore tables',

  'fc.height.config': 'Advanced Settings',
  'fc.input.right.value': 'Incorrect format',
  'fc.instance_name.label': 'Instances:',
  'fc.loading': 'Loading...',
  'fc.log.active.title': 'Log Service must be activated.',

  'fc.log.not_active.title':
    'Your Log Service is not activated. Please activate it first and then refresh this page.',

  'fc.log.not_open.help': 'Please activate Log Service before setting up log configuration.',

  'fc.ecs.not_open.help':
    'Please activate ECS Service before setting up security group configuration.',

  'fc.vpc.not_open.help': 'Please activate VPC Service before setting up vpc configuration.',

  'fc.log.not_open.title':
    'You have not authorized the Log Service to call your function or read/write the LogStore. Please add the permission and refresh the page.',

  'fc.log.open.tooltip': 'You need to activate the Log Service first.',
  'fc.log_store': 'LogStore',
  'fc.log_store.label': 'LogStore Name:',
  'fc.log_store.placeholder': 'Select a LogStore.',

  'fc.log_store.repeat':
    'The logstore name cannot be the same as the trigger logstore name. Please select another one.',

  'fc.log_store.required': 'The logStore name cannot be empty.',
  'fc.log_store.tooltip': 'FC push logs of function to the logStore of your project.',
  'fc.request_metrics': '开启请求级别指标',
  'fc.trigger.log_store.tooltip': 'LogStore name (Data Source). This trigger retrieves data from the LogStore regularly.',
  'fc.metrics.invoke_number': 'Invocations (This Month)',
  'fc.metrics.net_used': 'Public Network Usage (This Month)',
  'fc.metrics.resource.invoke.unit': '次',
  'fc.metrics.resource.used.unit': "'CU-S'",
  'fc.metrics.resource_used': 'Resource Usage (This Month)',
  'fc.metrics.title': 'Usage',
  'fc.metrics.tooltip.last_time': 'Last updated',
  'fc.metrics.tooltip.link': 'Billing Center.',
  'fc.metrics.tooltip.overview.link': 'Billing Center',
  'fc.metrics.tooltip.title': 'Usage data is updated hourly. For detailed usage report, go to',
  'fc.modify_time': 'Last Modified Time',
  'fc.monitor.button': 'Monitoring',
  'fc.new.product.function.publish': 'Feature Release',
  'fc.new.product.state': 'Latest News',
  'fc.not_open.authoration.button': 'Authorize Now',
  'fc.not_open.authoration.refresh.button': 'Refresh page',
  'fc.object.exist.warning': 'The object already exists',
  'fc.object_name_label': 'Object List:',
  'fc.open': 'Click to activate',
  'fc.open.error': 'An error occurred while activating the service. Please try again later.',
  'fc.oss.active.button': 'Activate Now',

  'fc.oss.not.active.title':
    'Your OSS has not been activated. Please activate it first and then refresh this page.',

  'fc.oss.not_active.title':
    'Your OSS has not been activated. Please activate it first and then refresh this page.',

  'fc.oss.not_active.open':
    'OSS 没有激活，点击 <a class="mockAStyle" href="{href}" target="_blank">激活</a>，激活完成后请刷新页面！',

  'fc.oss.not_active.refresh': '重新检测 OSS 开通状态',
  'fc.ros.not_active.open': 'ROS 没有激活，点击 <a class="mockAStyle" href="{href}" target="_blank">激活</a>，激活完成后请刷新页面！',
  'fc.cdn.not_active.title': 'Your CDN has not been activated. Please activate it first and then refresh this page.',
  'fc.oss.not_open.title': 'You have not authorized OSS to invoke your function. Please add the authorization in OSS and refresh this page.',
  'fc.oss.refresh.button': 'Refresh',
  'fc.overview.function.template.detail': 'View Details',
  'fc.overview.function.template.detail.label': 'Details',
  'fc.overview.function.template.title': 'Function Templates',
  'fc.overview.trigger.title': 'Triggers',
  'fc.overview.execution_times': '本月总执行次数',
  'fc.overview.resource_used': '本月总资源使用量',
  'fc.policy': 'Policy Template:',
  'fc.policy.for.role': 'Polices in the role',
  'fc.policy.placeholder': 'Add a function policy template.',

  'fc.policy.tooltip':
    'Permissions associated to the selected policy templates are granted to the role that you created. Please make sure that the role and its permissions are effective before creating a function.',

  'fc.project_name': 'Log Project',
  'fc.project_name.label': 'Log Project Name',
  'fc.project_name.placeholder': 'Select a log project.',
  'fc.project_name.required': 'The log project name cannot be empty.',
  'fc.project_name.tooltip': 'Log project name.',
  'fc.refresh': 'Refresh page',
  'fc.refresh.page': 'Refresh',
  'fc.region': 'Region',
  'fc.region.for': 'Region',
  'fc.region.balloon': '更新区域？新建服务之前请先服务',
  'fc.ide.to_old': '使用旧版编辑器',
  'fc.ide.to_new': '使用新版编辑器',
  'fc.ide.unsupported': '您的浏览器不支持新版编辑器，建议使用谷歌浏览器',
  'fc.mns_trigger.topic.label': 'Topic',

  'fc.region.help':
    'Services in the same region can communicate with each other over the intranet. The region cannot be changed after the service is created.',

  'fc.resource.used.notice': 'Resource usage tips',
  'fc.resource.used.notice.success': 'Authorization succeeded.',
  'fc.role.exist.role': 'Existing service role',
  'fc.role.exist.role.help': 'Make sure that the existing role has the required permissions.',
  'fc.role.exist.role.placeholder': 'Select an existing role',
  'fc.role.exist.role.required': 'The existing role cannot be empty.',
  'fc.role.exist.role.title': 'Existing Role',
  'fc.role.exist.role.tooltip': 'Principal of the role shown is a service account fc.aliyuncs.com.',

  'fc.role.exist.role.tooltip.fot':
    'Make sure the role you have specified can be assumed by OSS and is authorized to call the function corresponding to this trigger.',

  'fc.role.mode': 'Role Operation',
  'fc.role.mode.help': 'Select a method to create a role.',
  'fc.role.mode.placeholder': 'Select a method to create a role.',
  'fc.role.mode.required': 'The role cannot be empty.',

  'fc.role.mode.tooltip':
    'You can select an existing role or create a role from the template to ensure that the new role comes with proper permissions.',

  'fc.role.name': 'Role Name:',

  'fc.role.name.help':
    '1. The name can only contain letters, numbers, and hyphens(-). <br/> 2. The name cannot have more than 64 characters. <br/>',

  'fc.role.new.required': 'The role selected cannot be empty.',
  'fc.role.new_role': 'Create a new role',
  'fc.role.placeholder': 'Enter a role name.',
  'fc.role.required': 'The role name cannot be empty.',
  'fc.role.select.placeholder': 'Select a proper method to create a role.',
  'fc.role.select.required': 'The role creation method cannot be empty.',
  'fc.role.tooltip': 'Enter a new role name and create role.',
  'fc.vpc_config.no_vpc.label': 'NO VPC',

  'fc.role_log.error.required':
    'You must select a logging template, a system template or vpc fields.',

  'fc.role_mode.exist_role.label': 'Select an existing role',
  'fc.role_mode.new_role.label': 'Create new role',
  'fc.role_mode.quick_authoration.label': 'Quick authorize',
  'fc.service.base_config.title': 'Basic Configurations',

  'fc.service.batch_delete.message':
    'Are you sure you want to delete the selected services? Make sure that no functions exist under the service you are about to delete.',

  'fc.service.create.button': 'Create Service',
  'fc.service.delete.button': 'Delete Service',
  'fc.service.description': 'Description',
  'fc.service.description.placeholder': 'Enter the service description.',
  'fc.service.description.tooltip': 'Describe your service.',
  'fc.service.height_config.title': 'Advanced Configurations',
  'fc.service.loading': 'Loading...',
  'fc.service.menu.close.service_list': 'Hide',
  'fc.service.menu.open.service_list': 'Show Services.',
  'fc.service.menu.search.label': 'Search Services.',
  'fc.service.menu.service_list': 'Services',
  'fc.service.menu.title': 'Function Compute',
  'fc.service.modify.button': 'Edit',
  'fc.service.name': 'Service Name',

  'fc.service.name.help':
    '1. Only letters, numbers, underscores (_), and hyphens (-) are allowed. <br/> 2. The name cannot start with a number or hyphen. <br/> 3. The name has to be between 1 to 128 characters in length.',

  'fc.cname.name.help':
    '自定义域名需要解析到服务所在的 Endpoint，请设置自定义域名的CNAME为：<br/>{url}',

  'fc.cname.name.help.new':
    '自定义域名需要解析到服务所在的 Endpoint，请设置自定义域名的CNAME为：<br/>{url}',

  'fc.cname.cert.name': '证书名称',
  'fc.cname.cert.name.placeholder': '请输入证书名称',
  'fc.cname.cert.certificate': '证书',
  'fc.cname.cert.certificate.placeholder': '请按照 PEM 编码格式填写',
  'fc.cname.cert.privateKey': '私钥',

  'fc.cname.cert.privateKey.placeholder':
    '-------- 敏感信息，证书私钥不可见 --------\n请按照 PEM 编码格式填写。',

  'fc.cname.cert.message.error': '由于您修改了公钥， 必须填写私钥',
  'fc.input.required': '输入不能为空',
  'fc.name.max': '名称不能超过 128 个字符',
  'fc.cname.cert.add_placeholder': '显示 PEM 编码参考样例',
  'fc.cname.cert.type': '证书类型',
  'fc.cname.cert.type.cloudshield': '云盾',
  'fc.cname.cert.type.cloudshield.placeholder': '请选择云盾证书',
  'fc.cname.cert.type.custom': '自定义证书',
  'fc.cname.cert.certificate.issued': '<a href="https://yundunnext.console.aliyun.com/?spm=5176.11785003.0.0.4e49142ft0B5Wx&p=cas&domain=.loveapple.top&from=CDN#/cooperate" target="#">一键签发</a>',
  'fc.cname.cert.ssl.console': '前往SSL证书控制台 <a href="https://yundun.console.aliyun.com/?spm=5176.100251.nav-right.1.2a024f15SQSEWF&p=cas" target="#">管理上传证书</a> 或',
  'fc.service.name.max': 'The service name cannot be more than 128 characters.',
  'fc.service.name.pattern': 'Only letters, numbers, underscores(_), and hyphens(-) are allowed.',
  'fc.service.name.placeholder': 'Enter a service name.',
  'fc.service.name.required': 'The service name cannot be empty.',
  'fc.service.not.select': 'Select a service to delete.',
  'fc.service.property.update.title': 'Properties',
  'fc.service.role': 'Service Role',
  'fc.service.name.validation': '服务名称不能为 function',
  'fc.service.role.authoration.success.notice':
    "Service role has been updated. You can click “X' to update it again.",

  'fc.service.role.placeholder':
    'The service role allows FC to access your cloud resources, such as pushing logs to configured logstore, accessing cloud resources from function code.',

  'fc.service.type.log': 'Log Service (Log)',
  'fc.service.type.oss': 'Object Storage Service (OSS)',
  'fc.service.type.timer': 'Time Trigger',
  'fc.service.type.http': 'Http Trigger',
  'fc.service.type.cdn': 'CDN Trigger',

  'fc.overview.trigger.list.http_trigger_warning':
    'Only one HTTP trigger is allowed to be created for a function.',

  'fc.http_trigger.method.placeholder': 'Please select a request method.',
  'fc.http_trigger.authoration.label': 'Authoration',
  'fc.http_trigger.authoration.path': 'Path',
  'fc.http_trigger.method.tooltip': 'HTTP request requires a method.',

  'fc.http_trigger.authoration.placeholder':
    'Please select an authoration method (anonymous or function).',

  'fc.http_trigger.method.label': 'Method',
  'fc.sls.trigger.function_config.pattern': 'Only JSON Object format is allowed.',
  'fc.sls.trigger.retry.max.message': 'The maximum number of retries cannot be more than 10 times.',
  'fc.spark.fetch.argument.isnot.right': 'The specified parameter is invalid. Try again',
  'fc.spark.fetch.diolog.error': 'Error',
  'fc.spark.fetch.diolog.ok': 'OK',
  'fc.spark.fetch.failed': 'Unable to request due to network error. Please try again later.',
  'fc.spark.fetch.system.error': 'An internal error has occurred. Please try again later.',
  'fc.spark.fetch.token.error': 'Your session has timed out. Please refresh the page.',
  'fc.survey': 'Feedback',
  'fc.dialog.tooltip.confirm.title': 'Confirm',
  'fc.dialog.tooltip.confirm.ok': 'Go to Save',
  'fc.dialog.tooltip.confirm.cancle': 'Cancle Save',
  'fc.table_name.label': 'OTS Table: ',

  'fc.template.api-gateway-nodejs6.desc':
    'This template implements a backend service for API Gateway. It shows how to return different content formats, such as HTML pages, JSON documents, and images.',

  'fc.template.blank-function.desc':
    'This template creates a blank function. You can use console to setup trigger, configuration and build a complete function.',

  'fc.template.copy-oss-object-python27.desc':
    'This template shows how to backup folders from a specified OSS bucket to other destinations. This sample code shows how to backup to Qiniu cloud.',

  'fc.template.get-object-meta.desc':
    'This template shows how to retrieve OSS object metadata. When an object with a specified prefix is uploaded to OSS, retrieve the object metadata and upload it to OSS.',

  'fc.template.get-oss-md5-python27.desc':
    'This template shows how to calculate the MD5 value of an OSS object. It uses the OSS streaming API to read file to minimize the memeory consumption.',

  'fc.template.image-crawler.desc':
    'This template shows how to use a web image crawler to grab all .jpg files from a user specified URL and store them into OSS.',

  'fc.template.image-recognition.desc':
    'This template shows that when an image is uploaded to OSS, the function is triggered to performs image recognition. The images are then stored based on their classification.',

  'fc.template.logstore-replication.desc':
    'This template shows how to use Function Compute to subscribe to Log Service logstore and copy data to another logstore.',

  'fc.template.marketplace-weather-demo.desc':
    'Function Compute provides an encapsulation of services available from the marketplace, and creates new services.',

  'fc.template.oss-download-zip-upload.desc':
    'This template shows how to perform actions such as download, compress, and upload from a specified bucket in OSS. This sample code requires OSS bucket write permission.',

  'fc.template.oss-get-object-info.desc':
    'This template shows how to retrieve the details of an object in an OSS bucket.',

  'fc.template.oss-shipper-csv.desc':
    'This function subscribes to a Log Service logstore, constructs a CSV entry with specified fields for each log entry, and then outputs a CSV file.',

  'fc.template.read-write-tablestore-nodejs6.desc':
    'This function reads from and writes to a table in Table Store. It calls PutRow to insert a row to the table and then calls GetRow to read the new row.',

  'fc.template.read-write-tablestore-python27.desc':
    'This function reads from and writes to a table in Table Store. It calls PutRow to insert a row to the table and then calls GetRow to read the new row.',

  'fc.template.return-apigateway-string.desc':
    'This template retrieves parameters passed from API Gateway and construct a standard response to requests sent from API Gateway.',

  'fc.template.without.policy': 'The template does not require any permission.',
  'fc.timer.trigger.utc.time.warning': 'Cron runs in UTC time.',
  'fc.function.config.code.envionment.variables': 'Environment Variables',
  'fc.function.config.code.enviroment.key.label': 'Key',
  'fc.function.config.code.enviroment.value.label': 'Value',
  'fc.http_trigger.authoration.anonymous.option': 'anonymous',
  'fc.http_trigger.authoration.function.option': 'function',
  'fc.function.config.code.enviroment.add.label': 'Add',
  'fc.function.config.code.enviroment.delete.label': 'Delete',

  'fc.function.code.save.dialog.tooltip':
    'Click Save to save current file, or Click Cancel to abort.',

  'fc.function.code.type.not.support.message': 'The type of this file does not support.',

  'fc.function.enviroment.varifies.key.pattern':
    'Only letters, numbers and underscores (_) are allowed, key cannot start with a number or underscores (_).',

  'fc.function.enviroment.varifies.value.pattern': 'Only printable characters are allowed.',
  'fc.timer.trigger.config.cront.crontExpression.required': 'Specify a Cron Expression',
  'fc.timer.trigger.config.cront.crontOption.required': 'Specify time interval.',
  'fc.timer.trigger.config.cront.label': 'Cron Expression',
  'fc.timer.trigger.config.cront.required': 'Specify a Cron Expression',
  'fc.timer.trigger.config.enabled.trigger': 'Enable Trigger',

  'fc.timer.trigger.config.enabled.trigger.help':
    'Enable the trigger now, or create it as disabled.',

  'fc.timer.trigger.config.enabled.trigger.required': 'Enable trigger state should not be null',
  'fc.timer.trigger.config.event.label': 'Event Payload',
  'fc.timer.trigger.config.event.placeholder': 'Please enter event payload.',
  'fc.timer.trigger.config.event.required': 'Event payload should not be empty.',
  'fc.timer.trigger.config.internal.help': 'Minimum value is 1. Only integers are allowed.',
  'fc.timer.trigger.config.internal.label': 'Interval',
  'fc.timer.trigger.config.internal.unit': 'Minutes',
  'fc.timer.trigger.config.label': 'Timer Settings',
  'fc.timer.trigger.config.number.max': 'Specified value cannot exceed {number}',
  'fc.timer.trigger.config.number.required': 'Enter a number',
  'fc.timer.trigger.config.on-off': 'ON/OFF',
  'fc.timer.trigger.config.on-off.required': 'ON/OFF cannot be empty.',
  'fc.timer.trigger.config.required': 'You must specify a value',
  'fc.timer.trigger.help': 'Minimum interval is 1 minute. Only integers are allowed.',
  'fc.trigger.action': 'Event Type',
  'fc.trigger.authorationMode': 'Authorization',
  'fc.trigger.methods': 'Methods',
  'fc.trigger.rul': 'Http Url',
  'fc.trigger.action.create': 'Create Trigger',
  'fc.trigger.action.delete': 'Delete',
  'fc.envs.key.duplicate.error': 'Key should not be repetitive.',

  'fc.trigger.api.context':
    'Quickly and safely using Function Compute as API Gateway back-end service.',

  'fc.trigger.api.title': 'API Gateway',

  'fc.trigger.authoration.prepare_policy.build.role':
    'The same invocation role can be reused if triggers belong to the same service and have the same type.',

  'fc.trigger.authoration.prepare_policy.default': 'Manage roles: ',

  'fc.trigger.authoration.prepare_policy.default.exist_role':
    "You have already configured a role. If you require additional permissions, click 'X' to update.",

  'fc.trigger.authoration.prepare_policy.default.success':
    "You have successfully configured the role. If you require additional permissions, click 'X' to update.",

  'fc.trigger.authoration.prepare_policy.exist.role':
    'Select an existing role and see if the role authorizes {triggerType} to access Function Compute.',

  'fc.trigger.authoration.prepare_policy.oneoff':
    'Once authorized, triggers of the same type can use this role.',

  'fc.trigger.authoration.prepare_policy.success.tooltip':
    "Click 'Restore' to continue using roles that have already been authorized",

  'fc.trigger.authoration.prepare_policy.success.trigger':
    "You have successfully configured the role. If you require additional permissions, click 'X' to update.",

  'fc.trigger.authoration.prepare_policy.success_one_off.base':
    "Click 'Restore' to continue using the highest level of authorization",

  'fc.trigger.authoration.prepare_policy.success_one_off.message':
    "You have successfully configured the role. If you require additional permissions, click 'X' to update.",

  'fc.trigger.create.service.type': 'Trigger Type',
  'fc.trigger.create.service.type.placeholder': 'Select a trigger type',
  'fc.trigger.function_config.check': 'Only JSON Object format is allowed.',
  'fc.trigger.is_delete': 'Are you sure you want to delete the trigger?',
  'fc.trigger.log.context': 'Using Function Compute to process log stream.',
  'fc.trigger.log.doc.helper': 'ETL Functions Developer Guide',
  'fc.trigger.log.title': 'Log Service',
  'fc.trigger.name.not.exist.message': 'Trigger does not exist.',
  'fc.trigger.operation': 'Actions',
  'fc.trigger.oss.context': 'OSS instantly triggers functions to process OSS objects.',
  'fc.trigger.oss.title': 'Object Storage Service',
  'fc.trigger.ots.context': 'Using Function Compute to process TableStore streams in realtime.',
  'fc.trigger.http.context': 'Providing an HTTP URL to access Function Compute invocation.',
  'fc.trigger.ots.title': 'Table Store',
  'fc.trigger.ots_trigger.title': 'OTS Trigger',
  'fc.trigger.rds.title': 'RDS Trigger',
  'fc.trigger.mns.title': 'MNS Trigger',
  'fc.trigger.required': 'Invocation role cannot be empty.',
  'fc.trigger.resource': 'Event Source',

  'fc.trigger.retry_time.help':
    '1. Value should be between 0 and 100. <br/>  2. This defines the number of times Log Service will retry if it fails to invoke function due to errors such as insufficient permissions, network failure, or invocation exceptions. <br/>  3. If Log Service still fails after all the retries, it will wait for the next schedule and invoke function again.',

  'fc.trigger.retry_time.max': 'The maximum number of retries is 100.',
  'fc.trigger.retry_time.min': 'The minimum number of retries is 0.',
  'fc.trigger.retry_time.pattern': 'Enter the number of retries.',
  'fc.trigger.retry_time.placeholder': 'Enter a value between 0 and 10.',
  'fc.trigger.retry_time.required': 'The number of retries cannot be empty.',
  'fc.trigger.retry_time.unit': 'Time(s)',
  'fc.trigger.retry_time_label': 'Retry Count',
  'fc.trigger.role': 'Invocation Role',

  'fc.trigger.role.manage.second.title':
    'Invocation Role authorizes event sources to invoke function',

  'fc.trigger.ots_trigger.context': '设置TableStore触发器，实现表格数据更新流的实时自定义处理.',
  'fc.trigger.rds.context': '设置RDS触发器，实现数据库表数据变更信息的实时自定义处理.',
  'fc.trigger.mns.context': '设置MNS主题触发器，触发函数对消息的自定义处理.',
  'fc.trigger.role.manage.title': 'Invocation Role Management',
  'fc.trigger.status': 'Status',
  'fc.trigger.status.open': 'Open',
  'fc.trigger.table.loading': 'Loading trigger list...',

  'fc.trigger.timer.context':
    'Triggering a function invocation periodically based on timing configuration.',

  'fc.trigger.timer.title': 'Time Trigger',
  'fc.trigger.type': 'Trigger Type',

  'fc.trigger_function_config.help':
    '1. Log Service passes this value to function as part of the function event. Function can customize its logic based on this configuration.<br/>  2. The configuration must be a string in JSON Object format. Enter &#123;&#125; if no parameter is required.',

  'fc.trigger_function_config.label': 'Function Configuration',
  'fc.trigger_function_config.placeholder': 'Function configuration, in JSON Object format.',
  'fc.trigger_function_config.required': 'The function configuration cannot be empty.',

  'fc.trigger_internal.attention':
    'The interval that Log Service triggers function execution. For example, every 120 seconds, Log Service reads locations of the unproccessed data and passes them to functions.',

  'fc.trigger_internal.help':
    '1. Value should be between 3 and 600 seconds. <br/> 2. This parameter defines the interval for Log Service to trigger the function invocation. For example, every 60 seconds, Log Service reads the locations of unprocessed data and uses them to invoke the function which then reads the data based on locations and does further processing.<br/> 3. For shard with large traffic (1 MB/s or higher), we recommend that you reduce the interval so Log Service can trigger functions more frequently.<br/>',

  'fc.trigger_internal.label': 'Invocation Interval',
  'fc.trigger_internal.max': 'The interval cannot be more than 10 minutes.',
  'fc.trigger_internal.pattern': 'Enter the interval.',
  'fc.trigger_internal.placeholder': 'Enter a value between 3 and 600.',
  'fc.trigger_internal.required': 'The interval range cannot be empty.',
  'fc.trigger_internal.unit': 'seconds',
  'fc.trigger_log_store.label': 'Trigger Log',
  'fc.trigger_log_store.placeholder': 'Select a LogStore.',

  'fc.trigger_log_store.repeat':
    'The store for saving trigger logs cannot be the same as the store from which Log Service reads the data locations.',

  'fc.trigger_log_store.required': 'The trigger log cannot be empty.',

  'fc.trigger_log_store.tooltip':
    'Log Service regularly triggers function execution, during which the exceptions and statistical information are recorded into this store.',

  'fc.trigger.log_store.href': '详情看日志服务',
  'fc.trigger_name': '触发器名称',
  'fc.trigger_name.check.catch': 'Exception detected. Please try again.',
  'fc.trigger_name.error.retry': 'Enter another name.',

  'fc.trigger_name.exist.error':
    'The specified trigger name already exists. Please try again with a different name.',

  'fc.trigger_name.help':
    '1. Only letters, numbers, underscores (_), and hyphens (-) are allowed. <br/> 2. The name cannot start with a number or hyphen. <br/> 3. The name can be 1 to 128 characters in length.',

  'fc.trigger_name.max': 'Trigger name cannot be more than 128 characters.',
  'fc.trigger_name.pattern': 'The name cannot start with a number or hyphen.',
  'fc.trigger_name.placeholder': 'Enter a trigger name.',
  'fc.trigger_name.required': 'The trigger name cannot be empty.',
  'fc.trigger_name.tooltip': 'Specify a trigger name.',
  'fc.trigger_retry.unit': 'Times',
  'fc.update.loading': 'Updating...',

  'fc.vpc.vswitch.zone.tooltip':
    '该集群提供的可用区有 <span style="font-weight: bold;">{zone}</span>。',

  'fc.vpc.vswitch.zone.tooltip3':
    '同一个 VPC 下的不同可用区内网是互通的。跨可用区的访问相比较于同可用区，可能会多 1～2ms 左右的延时。',

  'fc.vpc.vswitch.new_create.link': '创建交换机',
  'fc.vpc.vswitch.new_create.config': '新建交换机的配置',
  'fc.vpc.vswitch.new_create.config.name': '名称：',
  'fc.vpc.vswitch.new_create.config.zoneId': '可用区：',
  'fc.vpc.vswitch.new_create.config.cidrBlock': 'IPv4网段：',
  'fc.vpc.security_group.link': '创建安全组',
  'fc.vpc.vswitch.new_create.link.tip': '该网段已被占用，请 <a href="https://vpc.console.aliyun.com/" target="_blank">前往</a> vpc控制台创建',

  'fc.vpc.vswitch.zone.checkAllow.tooltip':
    '您选择的交换机的可用区是 {zoneId}, 请在可用区 {zoneList} 里创建交换机。详情参考 <a target="#" href={faq}>FAQ 链接</a> ',

  'fc.update_trigger.title': 'Edit Trigger',
  'fc.update_trigger.trigger_type': 'Trigger Type',
  'fc.user_link.guide': 'Developer Guide',
  'fc.user_link.introduction': 'Get Started',
  'fc.user_link.monitor': 'CloudMonitor',
  'fc.user_link.more': 'More',
  'fc.user_link.pricing': 'Pricing',
  'fc.user_link.questions': 'FAQs',
  'fc.user_link.tool': 'CLI Tool',

  'fc.utils.ram.warning.ispass':
    'Policies in green are created for this template and have been attached to the corresponding role.',

  'fc.utils.ram.warning.notpass':
    'Hover over role policies. Add the recommended policies to your existing role if needed.',

  'fc.utils.ram.warning.policies.ispass':
    'The required policies have been automatically attached to the role.',

  'fc.utils.ram.warning.policies.notpass':
    'This service has no service role configured. This configuration will create a role based on template requirements.',

  'fc.utils.ram.warning.roleName.ispass':
    'Role and policies in green are created based on the template requirements. The service will be updated to use the role.',

  'fc.utils.ram.warning.roleName.notpass':
    'This service has no service role configured. This configuration will create a role based on the template requirements.',

  'fc.utils.ram.warning.serviceName':
    'Go back to the previous step and select a service to use the role.',

  'fc.verify.by email': 'Email Verification',
  'fc.verify.by email.already': 'Your Bound Email',
  'fc.verify.by email.change': 'Change Email',
  'fc.verify.by mfa': 'MFA Verification',
  'fc.verify.by mfa.already': 'Verify Virtual MFA Device',
  'fc.verify.by mfa.change': 'Unbind MFA',
  'fc.verify.by phone': 'Phone Verification',
  'fc.verify.by phone.already': 'Phone Bound',
  'fc.verify.by phone.change': 'Change Phone',
  'fc.verify.code': 'Verification Code',
  'fc.verify.code.click to get': 'Get Code',
  'fc.verify.code.error and input again': 'Incorrect verification code. Enter the code again.',
  'fc.verify.code.resend after n seconds': 'The code will be re-sent in {n} seconds.',
  'fc.verify.dialog.cancel': 'Cancel',
  'fc.verify.dialog.operation.cancel': 'This action has been canceled.',

  'fc.verify.email.bind.description':
    'No email address has been found. Please link your email account to increase your account security.',

  'fc.verify.mode.error': 'No verification method found.',

  'fc.verify.mode.error.message':
    'To protect your account security, set a verification method first.',

  'fc.verify.no method.continue in new window': 'Complete the settings in the new window.',
  'fc.verify.no method.go': 'Configure Now',

  'fc.verify.no method.message':
    'No verification method found. To protect your account security, set a verification method first.',

  'fc.verify.no method.title': 'Verification Method',
  'fc.verify.process.locale.cancel': 'Cancel',
  'fc.verify.process.locale.ok': 'Okay',

  'fc.verify.risk.context':
    'To better protect the security of your account. Please setup an authentication method.',

  'fc.verify.risk.hight.tooltip':
    'Your account is locked due to risk management. Please contact customer support.',

  'fc.verify.risk.title': 'No Authentication Method Detected.',
  'fc.verify.settings': 'Settings',

  'fc.verify.sms.bind.description':
    'No phone number has been found. Please link your phone number to increase your account security.',

  'fc.wind.component.dialog.cancel': 'Cancel',
  'fc.wind.component.dialog.ok': 'OK',
  'fc.wind.component.dialog.processing': '处理中',

  'function.authoration.jump.warning':
    'before any page jump, ensure that the permissions required by the template have been added to the service role, otherwise the function will fail to run.',

  'function.template.authoration.error':
    'please grant permissions required by this function template',

  'height.config': 'advanced configuration',
  'instance_name.label': 'instance list:',

  'log.not_open.help':
    'if you need to configure log, please go to activate your log, otherwise ignore.',

  'log_store.placeholder': 'choosing the right warehouse name',
  'log_store.required': 'select log warehouse cannot be empty',

  'log_store.tooltip':
    'function push function log to the project (Project) under the log database (Logstore).',

  'object.exist.warning': 'object already exists',
  'fc.function.invoke.sls.loading': 'loading logs',
  'fc.function.log.more': 'Click to see more logs',
  'fc.function.log.pluger.loading': 'Logs loading...',

  'fc.log.enable.reference.article':
    'FC automatically stores function logs into Log Service if the service has Log Service project and logstore configured. Users can view logs by the following ways: ',

  'fc.log.enable.status': '1. 日志服务状态：',
  'fc.log.enabled': 'Open',
  'fc.log.not.enable': 'Close',
  'fc.log.goto.config': 'Configure',
  'fc.log.advanced.tab_key': '高级查询',
  'fc.log.basic.tab_key': '简单查询',
  'fc.log.basic.requist.placeholder': '按 requestID 查询',
  'fc.log.basic.log.requestId': 'requestID 未找到',
  'fc.log.basic.select.null': '未查询到数据',
  'fc.log.basic.invoke.succ': '调用成功',
  'fc.log.basic.invoke.error': '调用失败',
  'fc.log.basic.invoke.time': '时间：',
  'fc.log.basic.show_log.title': '日志',
  'fc.log.basic.requestId.label': '请求 Id：',
  'fc.log.basic.invoke_cost.label': '计费时间：',
  'fc.log.basic.duration_ms.label': '运行时间：',
  'fc.log.basic.memory_MB.label': '消耗内存：',
  'fc.log.basic.call_analysis.link': '调用分析',

  // 'fc.log.basic.all.label': '全部日志',
  'fc.log.basic.invoke.label': '调用日志',

  'fc.log.basic.invoke_failed.label': '调用错误',
  'fc.log.basic.invoke_end.label': '调用成功',
  'fc.log.basic.all.initialize': '初始化日志',
  'fc.log.basic.initialize_failed.label': 'initialize 失败',
  'fc.log.basic.initialize_end.label': 'initialize 成功',
  'fc.log.basic.all.error': '全部错误',
  'fc.log.config.authorization.refrence': '2. 配置日志仓库和工程，并且授权函数计算写日志的权限',
  'fc.log.open.index.refrence': '3. 开通日志索引',

  'oss.not.active.title':
    'your object storage also had not been activated, please click on the activation of the page, and then click refresh current page',

  'oss.not_active.title':
    'no activation of the oss, click on the activate button, activate completion click refresh page.',

  'oss.not_open.title':
    "you haven't been awarded to call your function with the privileges of the storage, please authority and then refresh the current page",

  'project_name.placeholder': 'choosing the right project name',
  'project_name.required': 'choice of log item cannot be empty',

  'project_name.tooltip':
    'function to push the function of log to the same region corresponding to the current user log service (project).',

  'refresh.page': 'Refresh',
  'region.for': 'the region from which the president is',

  'region.help':
    'within the products within the same region can parlay, created after the service has been unable to replace the regional, please choose carefully.',

  'service.type.log': 'the EVENT log service log',
  'service.type.oss': 'object STORAGE oss',
  'table_name.label': 'ots watch:',

  'trigger.api.context':
    'fast, security configuration function as the api gateway on the backend services.',

  'trigger.api.title': 'the api gateway',

  'trigger.log.context':
    'through the timer log service polling data update and data interval as the events triggering function performs.',

  'trigger.log.title': 'the event log service',

  'trigger.oss.context':
    'IN conjunction with the oss events AND instant trigger function processing object to store data',

  'trigger.oss.title': 'object storage',

  'trigger.ots.context':
    'the use of function to calculate the incremental form storage data in real time calculation',

  'trigger.ots.title': 'table storage',
  'update.loading': 'update...',

  'utils.ram.warning.ispass':
    'Authorizations in green are created for this template. The authorization has been bound to the corresponding role.',

  'utils.ram.warning.notpass':
    'Mouseover role policies. Compare the authorizations this templates needs and determine the authorizations are required by existing roles.',

  'utils.ram.warning.policies.ispass':
    'The required authorizations have been automatically bound to the role.',

  'utils.ram.warning.policies.notpass':
    'This service has no roles bound. This configuration will create an authorized role for use with this template.',

  'utils.ram.warning.roleName.ispass':
    'Roles and authorizations in green are created based on the requirements of the template. This role will be bound to the service.',

  'utils.ram.warning.roleName.notpass':
    'This service has no roles bound. This configuration will prepare an authorized role for use with this template.',

  'utils.ram.warning.serviceName':
    'Go back to the previous step and select a service to bind to the role.',

  'fc.service.nas_config.local_dir.required': '必须在/home或者/mnt目录下。',
  'fc.service.nas_config.local_dir.duplicate': '挂载目录重复。',
  'fc.service.nas_config.local_dir.not_null': '挂载点不能为空。',
  'fc.func.template.aliyun-config-python3': '配置审计自定义规则',

  'fc.template.aliyun-config-python3.desc':
    '配置审计产品的自定义规则模板，方便您快速开发企业定制化的合规规则。',

  // cdn trigger
  'fc.cdn-trigger.label': 'CDN事件触发器',

  'fc.trigger-create.config': '触发器配置',
  'fc.cdn-trigger.document.link': 'CDN触发器',
  'fc.cdn-trigger.action.resource_block.label': 'CDN资源封禁(block)',
  'fc.cdn-trigger.action.resource_preload': 'CDN资源预热(preload)',
  'fc.cdn-trigger.action.resource_purge': 'CDN资源刷新(purge)',
  'fc.cdn-trigger.remark.required': '备注不能为空',
  'fc.cdn-trigger.action.resource_logFileCreated': 'CDN离线日志文件生成(logFileCreated)',
  'fc.cdn-trigger.action.label': '触发事件',
  'fc.cdn-trigger.action.tooltip': '根据您选择的日志触发类型和触发器是对应的关系',
  'fc.cdn-trigger.action.placeholder': '请选择一个触发事件类型',
  'fc.cdn-trigger.action.version': '触发事件版本',
  'fc.cdn-trigger.acton.version.placeholder': '请输入一个触发事件版本号',
  'fc.cdn-trigger.vrsion.required': '触发器版本不能为空',
  'fc.cdn-trigger.action.remark.placeholder': '请输入备注信息',
  'fc.cdn-trigger.action.remark': '备注',
  'fc.cdn-trigger.filters.label': '过滤器',
  'fc.cdn-trigger.filters.key': '过滤参数',
  'fc.cdn-trigger.filters.value': '过滤参数值',
  'fc.cdn-trigger.filters.value.required': '过滤参数值不能为空',
  'fc.cdn-trigger.filtrs.create.label': '新建过滤器',

  'fc.cdn-trigger.filtrs.help':
    '1. 一个CDN event trigger可以有多个过滤器， 必须是成对的<过滤参数， 过滤参数值> <br/> 每个过滤器只有一个过滤参数：domain(第一版支持的四个事件都是只有domain这一种过滤参数) ' +
    "<br/> 每个过滤器可以有多个逗号隔开的过滤参数值：www.abd.com, www.taobao.com <br/> 控制台默认显示一个过滤器，用户点击'新建过滤器'增加更多的过滤器。",

  // 这里面都是cname相关的翻译文档
  'fc.http_trigger.waining.title': 'HTTP触发器对应的函数，可以配置自定义域名。',

  'fc.http_trigger.warning.title.jump': '点击前往',

  'fc.http_trigger.warning.description1.title':
    '设置 HTTP 触发器的函数接口与普通函数接口不同，详细信息请参考 ',

  'fc.http_trigger.warning.description1.jump': 'HTTP 触发器接口形式',
  'fc.http_trigger.warning.description2.title': '注意: HTTP 触发器只能在创建函数时创建',
  'fc.http_trigger.warning.description3.title': 'Http 触发器只支持同步调用',
  'fc.cname.cname.add.help.label': '1.自定义域名只能绑定是含有 HTTP 触发器的函数',
  'fc.cname.confirm.warning': '警告',
  'fc.cname.confirm.delete.title': '是否删除此项自定义域名?',

  'fc.cname.confirm_accelerateDomain.delete.title':
    '此域名是 CDN 加速域名 {accelerateDomain} 的源站域名，删除此域名不会删除对应的源站域名，确认删除吗？',

  'fc.cname.confirm.warning.delete': '删除',
  'fc.cname.confirm.warning.delete.ok': '删除成功。',
  'fc.cname.confirm.manage.second.title': '自定义域名管理',
  'fc.cname.confirm.update.title': '修改自定义域名',
  'fc.cname.confirm.create.title': '创建自定义域名',
  'fc.cname.create.title.label': '增加自定义域名',
  'fc.cname.update.title': '修改',
  'fc.cname.delete.title': '删除',
  'fc.cname.list.title': '域名列表',
  'fc.cname.document.label': '使用文档',
  'fc.cname.create.label': '创建域名',
  'fc.cname.list.empty.label': '未绑定自定义域名',
  'fc.cname.address.label': '域名',
  'fc.cname.protocol.label': '支持协议',
  'fc.cname.create_time.label': '创建时间',
  'fc.cname.modify_time.label': '更新时间',
  'fc.cname.operate.label': '操作',
  'fc.cname.path.deplicate.required': '路径不能重复。',
  'fc.cname.path.required': '路径不能为空。',
  'fc.cname.path.pattern': '路经输入不符合预期。',
  'fc.cname.path.service.required': '请输入一个服务',
  'fc.cname.path.function.required': '请输入一个函数',
  'fc.cname.path.label': '路径',
  'fc.cname.path.placeholder': '请输入',
  'fc.cname.path.accelerate.switch': '开启 CDN 加速',
  'fc.cname.path.accelerate.switch.message': '为部署在函数计算上的应用开启CDN加速功能，可让终端用户更快读取所需内容',
  'fc.cname.path.accelerate.detail': '<a href="https://help.aliyun.com/document_detail/111175.html?spm=5176.8663048.0.dexternal.7b943edc81t8mq" target="_blank">详情</a>',
  'fc.cname.path.accelerate.domain.label': '加速域名',
  'fc.cname.path.accelerate.domain.placeholder': '请输入',
  'fc.cname.path.accelerate.domain.help': '需要为加速域名设置 CNAME，详情请参考 <a href="//help.aliyun.com/document_detail/27144.html" target="#"> 设置CNAME</a>',
  'fc.cname.path.service_name.label': '服务名称',
  'fc.cname.path.service_name.placeholder': '请选择服务名称',
  'fc.cname.path.function_name.label': '函数名称',
  'fc.cname.path.function_name.placeholder': '请选择函数名称',
  'fc.cname.path.qualifier.label': '版本/别名',
  'fc.cname.path.qualifier.placeholder': '请选择版本/别名',
  'fc.cname.path.name.label': '自定义域名名称',
  'fc.cname.path.name.required': '自定义域名不能为空。',
  'fc.cname.path.name.pattern': '名称输入不符合预期。',
  'fc.cname.path.name.maxlength': '名称输入最多不能超过 256 个字符。',
  'fc.cname.path.name.label2': '域名名称',
  'fc.cname.path.name.label2.placeholder': '自定义域名需接入阿里云备案',
  'fc.cname.path.region.label': '所属区域',
  'fc.cname.path.route.config.label': '路由设置',
  'fc.cname.path.accelerate.switch.auto': '为方便您使用CDN加速，系统将自动帮您开通CDN服务',

  'fc.cname.path.route.config.label.tip':
    '自定义域名只能绑定有HTTP触发器的函数请先创建HTTP触发器函数，再设置路由',

  'fc.cname.path.required.name.config.show': 'fc.http_trigger.waining.title',
  'fc.overview.fcFunc.title': '函数计算生态',
  'fc.overview.fcFunc.log.title': '日志处理',
  'fc.overview.fcFunc.log.context': '配置日志处理逻辑，可以通过可视化的查看您的日志。',
  'fc.overview.fcFunc.cname.title': '自定义域名管理',
  'fc.overview.fcFunc.cname.context': '自定义域名轻松迁移您的 WEB 应用到函数计算',
  'fc.overview.fcFunc.cname.title.help': '日志分析为收费项目，资费标准请查阅',
  'fc.overview.fcFunc.cname.title.pay.help': '计费方式说明',
  'fc.overview.fcFunc.cname.title.pay.second.help': '日志分析操作和日志字段说明',
  'fc.vpcConfig.vswitch.zoneb.required': '不能选择可用区B的机器',
  'fc.user_link.yunxi.title': '云栖社区',
  'fc.overview.fcFunc.webide.title': '在线 WEB IDE',
  'fc.overview.fcFunc.webide.context': '现在 WEB IDE可以让你在线上直接编辑，打包和调试函数',

  // initialzer
  'fc.initializer.open.warning': '启动初始化功能， 请注意实现代码中初始化函数功能的逻辑。',

  'fc.initializer.open.label': '配置初始化函数',
  'fc.initializer.handler.label': '初始化函数入口',
  'fc.initializer.handler.maxlength': '函数入口长度不能超过 128 个字符',
  'fc.initializer.handler.required': '初始化的值不能为空。',
  'fc.initializer.timeout.label': '初始化超时时间',
  'fc.initializer.timeout.label_1': '超时时间',
  'fc.initializer.handler.placeholder': '设置为空，初始化功能处于关闭状态',
  'fc.initializer.timeout.placeholder': '输入合适的初始化超时时间，全部为数字',
  'fc.initializer.timeout.error.message': '超时时间不能为空。',
  'fc.initializer.timeout.required': '超时时间不能为空。',

  'fc.initializer.handler.help':
    "'initializer' 格式为'[文件名].[初始化函数名]'。例如创建函数时指定的initializer为index.initializer，入口函数为initializer。",

  'fc.initializer.handler.java8.help':
    "'initializer'的格式为'[package].[class]::[method]'。例如包名是'example'，类名是'HelloFC'，那么创建函数时指定的Handler为example.HelloFC::initialize。",

  'fc.initializer.timeout.length.required': '函数初始化时间最大300秒',
  'fc.rds_trigger.instance.label': '实例ID',
  'fc.rds_trigger.instance.requred': '请选择实例ID',
  'fc.rds_trigger.table.label': '表名',
  'fc.rds_trigger.retry.label': '失败重试次数',
  'fc.rds_trigger.retry.placeholder': '选择失败重试次数',
  'fc.rds_trigger.retry.required': '失败重试次数不能为空',
  'fc.rds_trigger.concurrentcy.label': '并发度',
  'fc.rds_trigger.concurrentcy.placeholder': '请选择并发度个数',
  'fc.rds_trigger.concurrentcy.required': '并发度个数不能为空',
  'fc.rds_trigger.event_format.label': '事件通知格式',
  'fc.rds_trigger.event_format.placeholder': '请选择事件通知格式',
  'fc.rds_trigger.event_format.required': '事件通知格式不能为空',

  'fc.rds_trigger.tables.help':
    "表，可以关联多张表，只有这些表的更新，才会触发函数执行， 比如参数为'db1.table1,db2.table2'",

  'fc.rds_trigger.retry.help':
    '失败重试次数，如果重试指定次数后还是失败，则跳过失败event，继续后续调用',

  'fc.rds_trigger.cincurrency.help':
    '调用并发量，如果用户关心事件顺序，一定要置为1，会按照事务在binlog中commit的顺序调用函数。如果不关心事件顺序，则可以调大并发，提高性能',

  // rds trigger
  'fc.rds_trigger.event_format.help': '事件通知格式,支持json和protobuf',

  // version
  'fc.version.label': '版本',

  'fc.alias.label': '别名',
  'fc.version.alias.search': '搜索版本/别名',
  'fc.version.alias.switch': '切换版本/别名',
  'fc.version.delete.label': '删除版本',
  'fc.version.publish.label': '发布版本',
  'fc.alias.create.label': '新建别名',
  'fc.alias.update.label': '修改别名',
  'fc.alias.delete.label': '删除别名',
  'fc.version.delete.dialog.title': '删除服务 {serviceName} 的版本: {version}',

  'fc.version.delete.dialog.context':
    '删除一个版本将删除此版本中包含的函数和配置，并不会删除指向此版本的别名或者触发器。建议先移除指向此版本的别名和触发器，删除后此版本中的函数将不能被触发。是否确认删除此版本？',

  'fc.alias.delete.dialog.title': '删除服务 {serviceName} 的版本别名 {version}',

  'fc.alias.delete.dialog.context':
    '删除一个别名只会删除别名本身，并不会删除别名指向的版本，也不会删除指向此别名的触发起。删除别名后不能继续使用此别名来触发其指向额度函数。是否确认删除此别名？',

  'fc.version.huidu.label': '不添加灰度版本',
  'fc.version.details.label': '版本信息',
  'fc.versionId.label': '版本号',
  'fc.versionId.placeholder': '请输入一个版本号',
  'fc.version.description.label': '描述',
  'fc.version.description.placeholder': '请输入版本描述内容',
  'fc.version.description.required': '描述不能为空。',
  'fc.alias.details.label': '别名信息',
  'fc.alias.versionId.label': '别名版本',
  'fc.alias.name.label': '别名名称',
  'fc.alias.versionId.point.label': '指向版本',
  'fc.alias.version.huidu.label': '灰度版本',
  'fc.alias.version.huidu.placeholder': '请选择一个版本',
  'fc.alias.huidu.rate': '权重',
  'fc.alias.huidu.rate.placeholder': '请输入权限比例',
  'fc.alias.huidu.rate.number.required': '只能是数字。',
  'fc.alias.huidu.rate.validate.required': '权重应该选择在0-100之间。',

  // publish version
  'fc.version.publish.dialog.titile': '从 LATEST 发布新版本',

  'fc.version.publish.dialog.context':
    '发布一个新版本，会为 LATEST 版本的函数和配置创建一个快照副本，不包含LATEST 版本上的触发器。已发布的版本是不可变的。请确认发布。',

  // create alias
  'fc.alias_create.dialog.title': '新建别名',

  'fc.alias_create.dialog.show':
    '一个别名可以指向一个主版本，或者一个主版本和一个灰度版本。请选择您需要的版本、权重、并确认。',

  'fc.alias_create.dialog.main': '主版本',
  'fc.alias_create.addtional.version': '灰度版本',
  'fc.alias_create.addtional.version.placeholder': '请选择一个版本号',
  'fc.alias_create.addtional.show': '您可以根据设置的权重，切换主版本的部分请求到灰度版本',
  'fc.alias_create.name.label': '名称',
  'fc.alias_create.name.placeholder': '请输入名称',
  'fc.alias_create.name.required': '名称不能为空。',
  'fc.alias_create.name.maxlength': '名称长度不能超过 128 个字符',

  // update alias
  'fc.alias_update.dialog.title': '更新别名',

  'fc.alias_update.dialog.show':
    '一个别名可以指向一个主版本，或者一个主版本和一个灰度版本。请选择您需要的版本、权重、并确认。',

  'fc.alias_update.version.not.same.required': '版本不能和主版本一致。',
  'fc.version.trigger.list.label': '服务版本/别名',
  'fc.service.version.label': '服务版本：',
  'fc.service.alias.label': '服务别名：',
  'fc.version.trigger.qulify.label': '触发器版本/别名',
  'fc.version.trigger.qulify.placeholder': '可以输入版本号/别名',

  // ots trigger
  'fc.ots_trigger.instance.label': 'Instance',

  'fc.ots_trigger.instance.placeholder': 'Input instance value',
  'fc.ots_trigger.instance.required': 'Instance value is required',
  'fc.ots_trigger.table.label': 'Table',
  'fc.ots_trigger.table.placeholder': 'Input table value',
  'fc.ots_trigger.table.required': 'Table value is required',

  'fc.mns_trigger.region.support.tooltip':
    '强烈建议 MNS Topic 和 函数计算的函数在相同的 Region，不同的 region 会增加网络延时和被墙的风险（函数所在的 region 和 MNS 主题分别在国内和国外时）',

  'fc.mns_trigger.region.notsupport.tooltip':
    '本Region不支持 MNS 主题触发器，为缩短延时尽量选择离所创建函数近的 Region 创建 MNS 主题。如果在国内的话，尽量选择国内，避免网络被墙。',

  'fc.mns_trigger.region.mns_topic.application':
    '需要发申请使用 MNS Trigger beta 功能，申请成功后，才可以支持 MNS 主题触发器。',

  'fc.mns_trigger.apply.button.label': 'MNS Trigger beta 功能申请',
  'fc.mns_trigger.apply.many.frequently.label': '申请太过频繁。',
  'fc.mns_trigger.apply.success.label': '申请成功。',
  'fc.mns_trigger.filterTag.label': '过滤标签',
  'fc.mns_trigger.filterTag.placeholder': '请输入过滤标签(可选)',
  'fc.mns_trigger.filterTag.max': '不能超过 16 个字符',
  'fc.mns_trigger.notifyStrategy.label': '重试策略',
  'fc.mns_trigger.notifyStrategy.placeholder': '请选择重试策略',
  'fc.mns_trigger.notifyStrategy.backoffRetry': '退避重试',
  'fc.mns_trigger.notifyStrategy.exponential_decay_retry': '指数衰减',
  'fc.mns_trigger.notifyContentFormat.label': 'Event 格式',
  'fc.mns_trigger.notifyContentFormat.placeholder': '请选择 Event 格式',
  'fc.mns_trigger.notifyContentFormat.json': 'JSON',
  'fc.mns_trigger.notifyContentFormat.stream': 'STREAM',

  'fc.function.version.code.disable.edit':
    '已经选择了某一个版本/别名，代码不能编辑，如果想编辑代码请切换到LATEST版本。',

  // 错误国际化
  'fc.vpc_config.security_group.error': '安全组权限不足, 需要 vpc 和 ecs 的权限',

  'fc.not_find.handler_method': '找不到 {eventName} 事件处理程序方法',
  'fc.list_role.nopermission': '获取角色列表权限不足， 需要 RAM 相关权限',
  'fc.checkRole_role.nopermission': '角色权限不足， 需要 RAM 相关权限',
  'fc.rds_role.nopermission': '获取数据库实例错误， 需要 RDS 相关权限',
  'fc.metrics_role.nopermission': '账号缺少 AliyunCloudMonitorReadOnlyAccess 的权限',
  'fc.account_system.nopermission': '资源没有激活',
  'fc.function.code.upload.oss.error': '代码文件最大 {maxNum}， 上传的文件 {localNum}',

  'fc.acs_ram_config.error':
    "the caller is not authorized to perform '{perform}' on resource '{resource}'",

  'fc.log_config.error': "无权访问 '{project}' 项目中的 '{logstore}' 日志存储区。",

  'fc.VSwitch_config.error':
    "VPC '{vpc}' 中不存在 VSwitch '{VSwitch}'。 VSwitch可能不存在或服务角色没有'{service}'权限",

  'fc.service_exists.error': "'{service}' 服务已经存在",
  'fc.vpc_config.error': '需要访问 vpc 的角色',
  'fc.service_exists_function.error': "函数 '{functions}' 已存在于服务 '{service}' 中",

  'fc.nas_access_vpc.error':
    '挂载 NFS://{mountNfs}:/ 命令失败，退出代码为 {code}，请确保nas挂载点地址正确并可从服务VPC访问',

  'fc.AccessDeniedListTrigger.error': "事件源 '{log}'返回错误：项目 {project} 已被禁止",
  'fc.event_source.error': "事件源 '{tablestore}' 返回错误：您无权执行 {action} 操作。",
  'fc.role_not_exists.error': 'EntityNotExist.Role: 该角色不存在 {role}<br />请求id: {id}',
  'fc.not_authorization.error': '您无权操作。',
  'fc.oss_event_source.error': '事件源 oss 返回错误：不能指定具有相同事件类型的重叠前缀和后缀。',
  'fc.cname_accelerate_domain_exists.error': '用户自定义域名 {accelerateDomain} 已存在',
  'fc.cname_domain_exists.error': '加速域名 {domain} 已存在',
  'fc.function_delete.has_trigger.error': '函数不为空, 请检查服务下面是否还有未删除的触发器。',
  'fc.service_delete.has_function.error': '服务不为空, 请检查服务下面是否还有未删除的函数。',

  'fc.create_function.reserved_name.error':
    '{variableName} 是函数计算保留字，不能用于环境变量名。 ',

  'fc.invalid_zip_file.error': '无效的 zip 文件',
  'fc.service.not_find.error': '找不到对应服务',

  'fc.cname.not_resolved.error':
    "域名 '{currentCname}' 尚未解析到您的 FC 端点，预期端点为 '{internetCname}' 或 '{privateCname}'",

  'fc.cname.malformed.error': '域名 {currentCname} 格式不正确',
  'fc.cname.not_registered.error': '域名 {currentCname} 未注册',
  'fc.trigger.cdn_filter.error': '事件源 cdn_events 返回错误：参数过滤器无效。',
  'fc.alias.creat.no_update.error': "无法发布服务 '{servieName}' 版本：上次发布以来未进行任何更改",
  'fc.need_logion.content': '您当前会话已经过期，请<a href={url}>重新登陆</a>',
  'fc.need_logion.content_code': '您当前会话已过期，请点击确认重新登录后返回该页面进行操作',
  'fc.service.not_exist.alias': 'alias \'{aliasName}\' of service \'{serviceName}\' does not exist',
  'fc.alias.exists_config': '别名 {aliasName} 下的函数 {functionName} 存在预留配置',
  'fc.no_permission': 'NoPermission',
  'fc.table_store_stream.error': '事件源 {tablestore} 返回错误：数据表 {tableName} 没有开启 Stream',
  'fc.urse.in_debt': "event source '{productName}' returned error: Current user is in debt.",
  'fc.field.not_provided': '未填写触发器名称',
  'fc.tags.value.error': '填写的值无效，长度限制1-128，并且不能包含 "http://"和"https://"。',
  'fc.mns_topic.error': 'Topic 不存在，请重新选择。',
  'fc.role.log.error': '日志记录需要角色权限。',
  'fc.role.ros.not_authorized': '账号缺少 AliyunROSFullAccess 权限。',
  'fc.role.ros.create_already_exists': '{stackName} 已存在',

  // 新版国际化
  'fc.title': '函数计算',

  'fc.service.table.layout': '表格布局',
  'fc.service.square.layout': '方块布局',
  'fc.service.square.layout.one_row': '单行',
  'fc.service.square.layout.one_row.lable': '方块布局（单行）',
  'fc.service.square.layout.two_row': '双行',
  'fc.service.square.layout.two_row.lable': '方块布局（双行）',
  'fc.version.to_old': '切换到旧版本',
  'fc.linkEdge.gmtCreate': '创建时间',
  'fc.cname.title': '自定义域名',
  'fc.function.memory_specification': '内存规格',
  'fc.function.configuration': '修改配置',
  'fc.function.create.instanceConcurrency': '{runtime} 运行环境暂不支持此功能。',
  'fc.function.create.success.immediately_link': '立即跳转',
  'fc.function.create.success.title': '函数新建成功',
  'fc.function.create.success': '本页面在 {time} 秒后自动跳转到函数代码执行页面，',
  'fc.function.create.success.select': '手动选择跳转地址:',
  'fc.document.button': '帮助文档',
  'fc.product_trends.button': '产品动态',
  'fc.overview.title': '概览',
  'fc.overview.addbar.title': '常用信息',
  'fc.overview.main.endpoint': '主账号 ID：',
  'fc.overview.private.endpoint': '内网 Endpoint：',
  'fc.overview.public.endpoint': '公网 Endpoint：',
  'fc.overview.public.accessKey': '查看',
  'fc.overview.toolbox': '开发工具',
  'fc.overview.entrance': '快速入口',
  'fc.fnf_console.entrance': '编排函数',
  'fc.fc_serv.index.title': '服务及函数',
  'fc.functions.title': '函数列表',
  'fc.service.overview': '服务配置',
  'fc.service.update': '配置服务',
  'fc.alias.manage': '版本管理',
  'fc.log.analysis_log': '分析日志',
  'fc.log.disassociate': '解除关联',
  'fc.log.market': '日志大盘',
  'fc.log.desc': '日志大盘为收费功能，资费标准请查阅：',
  'fc.log.market_update': '配置日志大盘',
  'fc.service.role.config': '角色配置',
  'fc.service_list.is_null': '您还没有创建过函数，',
  'fc.service_show_list.is_null': '没有搜索到服务',
  'fc.service_list.delect_button': '删除服务',
  'fc.service_list.update_button': '编辑服务',
  'fc.function.config.code.envionment.instanceConcurrency': '单实例并发度',
  'fc.function.config.code.envionment.instanceConcurrency.help': '单个实例能够并发处理的请求数',
  'fc.function.config.code.envionment.instanceConcurrency.rule': '单实例并发度不能为空',
  'fc.service.filter.function_lable': '搜索函数',
  'fc.service.fliter.service_lable': '服务名称',
  'fc.service.filter.function_placeholder': '请输入函数名',
  'fc.service.fliter.service_placeholder': '请输入服务名',
  'fc.service.filter_tag.service_lable': '标签',
  'fc.service.filter_tag.service_placeholder': '按标签搜索服务',
  'fc.service.tag.title': '标签：',
  'fc.service.tag.update': '编辑标签',
  'fc.service.tag.is_null': '暂无标签',
  'fc.service.tag.bind': '绑定：',
  'fc.service.tag.new': '新建标签',
  'fc.service.tag.key': '键：',
  'fc.service.tag.clear_all': '清空',
  'fc.service.tag.value': '值：',
  'fc.service.check_to_latest': '服务必须切换到 LATEST 版本才能配置函数，立即切换到 LATEST 版本。',

  'fc.service.version_to_latest':
    '服务必须切换到 LATEST 版本才能创建新版本，立即切换到 LATEST 版本。',

  'fc.service.create_function.to_latest':
    '服务必须切换到 LATEST 版本才能创建函数，立即切换到 LATEST 版本。',

  'fc.service.update_function.to_latest':
    '服务必须切换到 LATEST 版本才能配置函数，立即切换到 LATEST 版本。',

  'fc.service.delect_function.to_latest':
    '服务必须切换到 LATEST 版本才能删除函数，立即切换到 LATEST 版本。',

  'fc.function.http.url_tip':
    'Http Trigger 会自动在响应头中强制添加 \'Content-Disposition: attachment\' 字段，此字段会使得返回结果在浏览器中以附件的方式下载。此字段无法覆盖，使用 <a target="#" href="{href}">自定义域名</a> 可以避免该问题。',

  'fc.button.create_immediately': '立即创建',
  'fc.function.update': '修改配置',
  'fc.function.check_tmp': '创建函数',
  'fc.function.configure_tmp': '配置触发器',
  'fc.timer.cron.tip.title': 'cron 表达式解读',
  'fc.timer.cron.tip.last_time': '上次触发时间：',
  'fc.timer.cron.tip.utc': 'utc 时间：',
  'fc.timer.cron.tip.locale': '本地时间：',
  'fc.timer.cron.tip.next_time': '下次触发时间：',
  'fc.timer.corn.error': '请输入正确的 cron 表达式',
  'fc.service.total': '服务总数',
  'fc.function.configure_func': '配置函数',
  'fc.function.memory.new_feedback': '想要更多的内存',
  'fc.function.timeout.new_feedback': '想要更长的时限',
  'fc.function.create.service_name.placeholder': '输入或选择服务',
  'fc.function.create.service_name.tip': '输入的服务不存在则自动创建',
  'fc.function.template.overview': '模板详情',
  'fc.function.create.title': '创建方式：',

  'fc.function.template.trigger_function.desc':
    'HTTP 函数模板会创建一个空白函数，通过引导页面进行触发器配置、函数参数配置，完成函数的创建。',

  'fc.function.template.trigger_function.name': 'HTTP 函数',
  'fc.template.trigger-function.desc': '使用 helloworld 示例创建空白 HTTP 函数',
  'fc.template.new_blank-function.desc': '使用 helloworld 示例创建空白函数',
  'fc.function.template.template_function.name': '模板函数',
  'fc.template.template-function.desc': '使用示例代码模板创建函数',
  'fc.function.template.new_blank_function.name': '事件函数',
  'fc.template.newBlank-function.desc': '使用 helloworld 示例创建事件函数',
  'fc.function.new_search.placeholder': '按名称、描述、运行环境搜索',
  'fc.function.search.desc': '描述',
  'fc.form.submit': '提交',
  'fc.form.submit.update': '提交',
  'fc.form.reset': '重置',
  'fc.form.cancle': '取消',
  'fc.file_upload.not_null': '上传文件不能为空',
  'fc.function.title': '函数配置',
  'fc.button.next_step': '下一步',
  'fc.button.previous_step': '上一步',
  'fc.button.creat_function': '完成',
  'fc.function.history': '最近访问函数',
  'fc.button.copy': '复制',
  'fc.button.unfold': '展开',
  'fc.button.collapse': '收起',
  'fc.development_tool.vscode': 'VSCode 插件：本地图形化开发、调试和部署工具',
  'fc.development_tool.fun': 'Fun：本地命令行开发、调试和部署工具',
  'fc.development_tool.webide': '云开发平台：工作在线化、研发模式Serverless化',
  'fc.development_tool.sdk': 'FC SDK：函数计算 API 的封装',
  'fc.function.output.button_lable': '导出函数',
  'fc.function.output.title': '导出函数',
  'fc.function.output.config': '导出配置',
  'fc.function.output.code': '导出代码',
  'fc.function.output.code_config': '导出配置和代码',

  'fc.function.output.config.tip':
    '导出配置：将您的函数配置以 yml 文件下载到本地，可以使用 <a href="https://help.aliyun.com/document_detail/64204.html" target="#">fun</a> 重新部署',

  'fc.function.output.code.tip': '导出代码：将您的函数代码文件下载到本地',

  'fc.function.output.code_config.tip':
    '导出配置和代码：将您的函数函数配置和函数代码下载到本地，解压可以直接使用 <a href="https://help.aliyun.com/document_detail/64204.html" target="#">fun</a> 工具重新部署到函数计算',

  'fc.vpc.migrate.urge.fast': '催促太过频繁',
  'fc.vpc.migrate.urge.success': '催促成功',
  'fc.vpc.migrate.urge.receive': '已经收到您开通 VPC 申请请求, 如果十分紧急请点击',
  'fc.vpc.migrate.urge.expedited': '加急处理',
  'fc.vpc.migrate.vpc_link': '迁移 VPC',
  'fc.vpc.migrate.vpc_link.detail': '使用 VPC 功能前请先',
  'fc.vpc.migrate.nas_link.detail': '使用文件系统请先',
  'fc.vpc.migrate.web.create.tip': '创建 Web 应用如果配置 VPC 功能，请先',
  'fc.vpc.migrate.apply_vpc': '使用 VPC 功能请先',
  'fc.vpc.migrate.apply_vpc_link': '申请 VPC 功能',
  'fc.function.copy.variables': '复制全部变量',
  'fc.function.create.service_name.null': '未检测到该服务，将自动创建',
  'fc.function.update.env.error': '输入的环境变量不符合 JSON 格式',
  'fc.logProcess.table.project.label': '项目',
  'fc.logProcess.table.region.label': '区域',
  'fc.logProcess.table.logstore.label': '日志库',
  'fc.logProcess.table.services.label': '服务',
  'fc.logProcess.table.operate.label': '操作',
  'fc.logProcess.refresh.label': '刷新',
  'fc.logProcess.create.label': '新建关联',
  'fc.logProcess.confirm.manage.second.title': '日志分析管理',
  'fc.logProcess.list.title': '日志分析配置列表',
  'fc.logProcess.create.title.label': '新建日志分析关联',
  'fc.logProcess.update.title.label': '更新日志分析关联',
  'fc.logProcess.confirm.delete.title': '是否解除此服务和日志的关联？',
  'fc.logProcess.roleARN.not.null': '角色名称不能为空。',
  'fc.logProcess.create.title': '自定义日志分析',
  'fc.logProcess.create.projectName.lable': '日志工程',
  'fc.logProcess.create.projectName.placeholder': '选择一个日志工程',
  'fc.logProcess.create.projectName.require': '日志工程不能为空',
  'fc.logProcess.create.LogStore.lable': '日志仓库',
  'fc.logProcess.create.LogStore.placeholder': '选择一个日志仓库',
  'fc.logProcess.create.LogStore.require': '日志仓库不能为空',
  'fc.logProcess.create.service.placeholder': '选择需要绑定的服务名称',
  'fc.logProcess.create.service.require': '服务不能为空',
  'fc.logProcess.to_service.lable': '还没有关联日志大盘，是否前往配置日志大盘？',
  'fc.logProcess.log_role.is_null': '日志仓库和日志项目不能为空',
  'fc.function.show_invoke_value.more': '查看更多',
  'fc.service.rds_config.label': 'RDS 配置',

  'fc.service.rds_config.vpc_is_null':
    '请先为服务配置 VPC，RDS 需要与服务属于同一个 VPC，可用区可以不同。',

  'fc.service.nas_config.vpc_is_null': '请先为服务配置 VPC。',
  'fc.service.rds_config.rds_delete': '删除',
  'fc.service.rds_config.rds_add': '添加',
  'fc.service.rds_config.rds_add.max': '最多绑定 5 个实例。',
  'fc.service.rds_config.rds_label': 'RDS 数据库',
  'fc.service.rds_config.rds_label.placeholder': '请选择 RDS 实例',
  'fc.service.rds_config.create.button': '如现有 RDS 实例不合适，您可以重新创建一个',
  'fc.service.rds_config.create.button_link': 'RDS 实例',
  'fc.service.nas_config.create.button': '如现没有合适的 NAS',
  'fc.service.nas_config.create.button_link': ' 立即创建',
  'fc.service.details.rds.dBInstanceId': '实例 ID',
  'fc.service.details.rds.payType': '计费方式',
  'fc.service.details.rds.engine': '类型',
  'fc.service.details.rds.payType.postpaid': '按量付费',
  'fc.service.details.rds.payType.prepaid': '包年包月',

  // 应用管理
  'fc.applications.title': '应用中心',

  'fc.overview.applications.title': '用模版快速创建应用',
  'fc.overview.applications.demo_description': '名称规则是 fc.overview.applications.id名_description, id显示：见下划线转空格 + 大写',
  'fc.applications.list.id': 'ID',
  'fc.applications.status.create_in_progress': '开始创建',
  'fc.applications.status.create_failed': '创建失败',
  'fc.applications.status.create_complete': '创建成功',
  'fc.applications.status.update_in_progress': '更新中',
  'fc.applications.status.update_failed': '更新失败',
  'fc.applications.status.update_complete': '更新成功',
  'fc.applications.status.delete_in_progress': '删除中',
  'fc.applications.status.delete_failed': '删除失败',
  'fc.applications.status.delete_complete': '删除成功',
  'fc.applications.status.create_rollback_in_progress': '回滚中',
  'fc.applications.status.create_rollback_failed': '回滚失败',
  'fc.applications.status.create_rollback_complete': '回滚成功',
  'fc.applications.status.rollback_in_progress': '回滚中',
  'fc.applications.status.rollback_failed': '回滚失败',
  'fc.applications.status.rollback_complete': '回滚成功',
  'fc.applications.status.check_in_progress': '检查中',
  'fc.applications.status.check_failed': '检查失败',
  'fc.applications.status.check_complete': '检查完成',
  'fc.applications.status.review_in_progress': '核对中',
  'fc.applications.status.init_complete': '初始化完成',
  'fc.applications.create.deploy': '部署',
  'fc.applications.create.button': '新建应用',
  'fc.applications.details.overview': '概览',
  'fc.applications.showRosTml.button': '显示',
  'fc.applications.details.deploy': '部署',
  'fc.applications.details.monitor': '监控',
  'fc.applications.status.success': '正常',
  'fc.applications.status.error': '异常',
  'fc.applications.overview.output.title': '输出',
  'fc.applications.overview.create_time': '创建时间',
  'fc.applications.overview.resource_type': '资源类型',
  'fc.applications.overview.stack_id': '资源 ID',
  'fc.applications.overview.stack_name': '逻辑资源名称',
  'fc.applications.overview.stack_real_name': '实体资源名称',
  'fc.applications.overview.status': '资源状态',
  'fc.applications.overview.status_reason': '状态原因',
  'fc.applications.overview.timeout_in_minutes': '超时时间',
  'fc.applications.overview.update_time': '更新时间',
  'fc.applications.overview.refresh': '如果域名已过期，刷新域名可以延迟过期时间',
  'fc.applications.deploy.histroy_titile': '事件记录',
  'fc.applications.deploy.to_ros': '更新应用（ROS）',
  'fc.applications.deploy.tml_title': '应用模版',
  'fc.applications.deploy.stack_id': '关联资源 ID',
  'fc.applications.create.show_details': '查看详情',
  'fc.applications.create_1.title': '选择模板',
  'fc.applications.create_1.search.placeholder': '按名称搜索模板',
  'fc.applications.create_1.button': '配置并部署',
  'fc.applications.create_1.samples': '公共模板',
  'fc.applications.create_2.title': '配置并部署',
  'fc.applications.create_2.create': '部署',
  'fc.applications.create_2.basic_title': '基础配置',
  'fc.applications.create_2.stack_name': '应用名称',
  'fc.applications.create_2.stack_tip': '长度1-64个字符，以大小写字母开头，可包含数字或 "-"',

  'fc.applications.create_2.template.stack_tip':
    '长度1-32个字符，以大小写字母开头，可包含数字或 "-"',

  'fc.applications.create_2.stack_err': '不符合格式要求',
  'fc.applications.create_2.deploy_resource': '部署资源',
  'fc.applications.create_2.timeout_minutes': '创建超时',
  'fc.applications.create_2.timeout_minutes_unit': '分钟',
  'fc.applications.create_2.timeout_minutes_tip': '以分钟为单位的正整数，数字范围 10-1440',
  'fc.applications.create_2.timeout_minutes_err_number': '只能包含数字',
  'fc.applications.create_2.timeout_minutes_err_range': '最小值为10，最大值为1440',
  'fc.applications.create_2.parameters_title': '参数配置',
  'fc.applications.create_2.allowedPattern_err': '输入数值需要符合表达式：{rule}',
  'fc.applications.create_2.maxlength_err': '长度最大为 {value}',
  'fc.applications.create_2.minlength_err': '长度最小为 {value}',
  'fc.applications.create_2.maxValue_err': '输入值最大为 {value}',
  'fc.applications.create_2.minValue_err': '输入值最小为 {value}',
  'fc.applications.create_2.preview_stack': '资源预览',
  'fc.applications.create_2.preview_stack_sub': '预览',
  'fc.applications.create_2.preview_stack_placeholder': '请先正确填写以上配置，才能预览资源。',
  'fc.applications.create_2.preview_stack_error': '请先正确填写以上配置',
  'fc.applications.create_2.preview_stack_title': '部署资源',
  'fc.applications.create_2.preview_stack_properties': '资源属性',
  'fc.applications.tmp.deploy.lable': '部署方式',
  'fc.applications.tmp.serverless.lable': '介绍',
  'fc.applications.tmp.study.lable': '学习资料',
  'fc.applications.tmp.create.lable': '立即部署',
  'fc.applications.tmp.nav.lable': '模板详情',
  'fc.applications.delete.title': '确认删除应用（{texts}）吗？',
  'fc.applications.app.create.title': '基于模板创建应用',
  'fc.applications.app.create.describe': '通过应用模板直接部署应用',

  // web 单体应用
  'fc.applications.web.create.title': '创建 Web 应用',

  'fc.applications.web.create.describe': '上传应用代码直接部署 Web 应用，零代码改造',
  'fc.applications.web.required.error': '值不能为空',
  'fc.applications.web.next': '下一步',
  'fc.applications.web.pre': '上一步',
  'fc.applications.web.determine': '确定',
  'fc.applications.web.input.placeholder': '请输入内容',
  'fc.applications.web.number.required': '只能是数字。',
  'fc.applications.web.input.error': '输入不正确',
  'fc.applications.web.input.maxLength.error': '最大输入 {max} 位',
  'fc.applications.web.input.minLength.error': '最小输入 {min} 位',
  'fc.operating.frequently': '操作过于频繁，稍后再尝试。',
  'fc.not.find.endpoint': '当前地区暂不支持该资源',

  // web 单体应用 Step1
  'fc.applications.web.create.step1.title': '应用基本信息',

  'fc.applications.web.create.step1.language.label': '语言',

  'fc.applications.web.create.step1.language.Nodejs.describe':
    '支持 Express、Nextjs 等框架的代码包',

  'fc.applications.web.create.step1.language.Java.describe': '支持 Spring-Boot 等框架的代码包',
  'fc.applications.web.create.step1.language.Go.describe': '支持 Gin 等框架的代码包',
  'fc.applications.web.create.step1.language.PHP.describe': '支持 ThinkPHP 等框架的代码包',
  'fc.applications.web.create.step1.language.Python.describe': '支持ZIP类型的代码包',
  'fc.applications.web.create.step1.language..NetCore.describe': '支持ZIP类型的代码包',
  'fc.applications.web.create.step1.language.Container.describe': '支持通过容器镜像部署应用',
  'fc.applications.web.create.step1.runtime.label': '框架/环境',
  'fc.applications.web.create.step1.codeMode.label': '代码包',
  'fc.applications.web.create.step1.codeMode.local': '上传本地程序',
  'fc.applications.web.create.step1.codeMode.local1': '代码包上传',
  'fc.applications.web.create.step1.codeMode.folder': '文件夹上传',
  'fc.applications.web.create.step1.codeMode.example': '使用示例程序',
  'fc.applications.web.create.step1.upload.label': '上传文件',
  'fc.applications.web.create.step1.upload.selectFile': '选择文件',
  'fc.applications.web.create.step1.appName.label': '应用名称',
  'fc.applications.web.create.step1.appDescribe.label': '应用描述',
  'fc.applications.web.create.step1.appDescribe.placeholder': '描述主要介绍应用的基本情况',
  'fc.applications.web.create.step1.runtime.custom': '自定义',
  'fc.applications.web.create.step1.uploading': '正在上传文件',
  'fc.applications.web.create.step1.discoverPortLoading': '正在检测启动命令和端口号',

  'fc.applications.web.create.step1.runtime.example.extra':
    '若想了解框架 {runtime} 示例程序的具体实现，请参考项目<a class="mockAStyle" href="{href}" target="_blank">源代码</a>',

  'fc.applications.web.framewor.website': '官网',

  'fc.applications.web.create.step1.codeMode.local1.prompt':
    ' 代码进行 ZIP 打包时，请不要包含代码根目录',

  'fc.applications.web.create.step1.go.tip':
    '需要以 GOARCH=amd64 GOOS=linux go build -ldflags "-s -w" 这个编译命令，来编译代码包',

  'fc.applications.web.create.step1.laravel.tip':
    "1. 需要在 bootstrap/app.php 添加 $app->useStoragePath(env('STORAGE_PATH', '/tmp/storage'))\n2. 需要在应用配置信息页面中环境变量设置添加：SESSION_DRIVER=cookie（使用 cookie 存储 session）LOG_CHANNEL=stderr（将报错输出到终端）",

  // web 单体应用 Step2
  'fc.applications.web.create.step2.title': '应用配置信息',

  'fc.applications.web.create.step2.start.title': '启动命令设置',
  'fc.applications.web.create.step2.start.subTitle': '设置应用启动时需要的命令',
  'fc.applications.web.create.step2.start.command': '启动命令',

  'fc.applications.web.create.step2.start.command.placeholder':
    '控制应用运行的输入命令，如：node、python',

  'fc.applications.web.create.step2.start.port': '监听端口',
  'fc.applications.web.create.step2.start.port.placeholder': '应用启动后的 HTTP 端口',
  'fc.applications.web.create.step2.environmentVariable.name': '环境变量名',
  'fc.applications.web.create.step2.environmentVariable.name.placeholder': '键',
  'fc.applications.web.create.step2.environmentVariable.value': '环境变量值',
  'fc.applications.web.create.step2.environmentVariable.value.placeholder': '值',
  'fc.applications.web.create.step2.senior.domain.title': '域名设置',
  'fc.applications.web.create.step2.senior.domain.tip': '设置应用域名',
  'fc.applications.web.create.step2.senior.domain.radio.auto': '使用临时域名',

  'fc.applications.web.autoDomain.tip':
    '临时域名是阿里云自动生成的，有过期时间并且每天有调用一千次等限制。',

  'fc.applications.web.create.step2.senior.domain.radio.custom': '使用自定义域名',
  'fc.applications.web.create.step2.senior.log.title': '日志设置',
  'fc.applications.web.create.step2.senior.log.tip': '设置将日志输出到 SLS',
  'fc.applications.web.create.step2.senior.log.resources.tip': '您当前应用关联日志资源的日志项目是 {project}，日志仓库是 {logstore}',
  'fc.applications.web.create.step2.senior.log.resources.switch': '是否需要更新',
  'fc.applications.web.create.step2.senior.log.radio.auto': '自动配置',
  'fc.applications.web.create.step2.senior.log.radio.custom': '自定义配置',
  'fc.applications.web.create.step2.senior.vpc.title': '专有网络设置',
  'fc.applications.web.create.step2.senior.vpc.tip': '设置应用可以访问该专有网络的云资源',
  'fc.applications.web.create.step2.senior.nas.open.label': '使用文件存储',
  'fc.applications.web.create.step2.senior.nas.title': '文件存储',
  'fc.applications.web.create.step2.senior.nas.tip': '设置应用可以访问文件存储资源',
  'fc.applications.web.create.step2.senior.vpc.open.label': '使用专有网络',
  'fc.applications.web.create.step2.senior.vpc.switch.label': '自动配置',
  'fc.applications.web.create.step2.senior.nas.switch.label': '自动配置 NAS 文件系统',
  'fc.applications.web.create.vpcAndNas.auto.error': 'VPC 为自动配置, NAS 必须也为自动配置',
  'fc.applications.web.create.vpcAndNas.openVpc.error': 'VPC 不配置，NAS 也不能配置',
  'fc.applications.web.create.nas.isTrue': '您的代码包大于 50 M，必须配置文件存储',
  'fc.applications.web.create.flow.error': '应用创建失败',
  'fc.applications.web.deploy.flow.error': '应用部署失败',
  'fc.applications.web.searchAppStatus.hasFlow': '此应用名称下存在异步流程，请稍后重试',

  'fc.fnf.not.enabled':
    'Serverless 工作流没有开通，请前往 <a class="mockAStyle" href="https://fnf.console.aliyun.com/" target="_blank">Serverless 工作流</a> 开通 ，<a class="mockAStyle" href="https://help.aliyun.com/document_detail/114020.html" target="_blank">Serverless 工作流帮助文档</a>。',

  'fc.applications.web.create.step2.vpc.error': '专有网络设置必须填写或者填写错误',
  'fc.applications.web.create.step2.nas.error': '文件存储必须填写或者填写错误',
  'fc.servcer.not.open': '{server} 没有开通。',
  'fc.servcer.open.url': ' 请前往 <a class="mockAStyle" href="{url}" target="_blank">{server}</a> 开通',
  'fc.applications.web.create.step.vpc.quota.exceeded': 'VPC 已经到达了上限，请前往 VPC 删除或者在第二步手动选择一个 VPC。',

  // web 单体应用 Step3
  'fc.applications.web.create.step3.title': '完成创建',

  'fc.applications.web.create.step3.create.loading.tip': '当前阶段请不要刷新页面。',

  'fc.applications.web.create.step3.create.succ.tip':
    '应用创建中，您可以通过访问 <a class="mockAStyle" href="{href}" target="_blank">ROS</a>，您也可以直接访问 <a class="aStyle" href="{url}">应用事件页</a> 进行查看',

  'fc.applications.web.create.step3.create.unzip.tip':
    '正在打包文件，预计需要 1-3 分钟，该任务已进任务队列，您可以进行其他操作，无需等待',

  'fc.sls.title': '日志服务',

  'fc.sls.title.not.config':
    'sls日志服务没有配置索引 <a class="mockAStyle" href="https://sls.console.aliyun.com/lognext/profile" target="_blank">前往配置</a>， <a class="mockAStyle" href="https://help.aliyun.com/document_detail/54604.html" target="_blank">sls日志配置帮助文档</a>',

  'fc.nas.title': '文件存储(NAS)',
  'fc.applications.create.sls.error': '创建日志资源失败',
  'fc.applications.create.vpc.error': '创建 VPC 资源失败',
  'fc.applications.create.nas.error': '创建 NAS 资源失败',
  'fc.applications.web.create.step3.service': '服务',
  'fc.applications.web.create.step3.function': '函数',
  'fc.applications.web.create.step3.project': '日志项目',
  'fc.applications.web.create.step3.logstore': '日志仓库',
  'fc.applications.web.create.step3.downloadAndPackageOver.loading': '打包文件',
  'fc.applications.web.create.step3.createApp.loading': '创建应用',
  'fc.applications.list.titleStatus': '任务列表',
  'fc.applications.removeProcessedAppStatus.error': '删除失败',
  'fc.applications.list.failed.deleteFlow': '确定要删除 {name} 的任务吗？',

  'fc.applications.list.running.deleteFlow':
    '{appName} 的任务还在执行中，确定要删除此任务吗？（超时失败会导致该记录一直存在，请确认后删除）',

  'fc.applications.list.createOrUpdate.tip': '有新的应用更新了，需要刷新列表才能看到最新内容',
  'fc.applications.web.create.step3.over': '完成',
  'fc.applications.web.create.step3.error.tip': '打包文件失败，需要重新上传代码包。',

  'fc.applications.web.create.step3.oss.tip':
    '未存在指定 OSS Bucket 时，会为您创建 OSS Bucket 以存储应用代码。',

  // web 单体应用详情
  'fc.applications.web.details.deploy.button': '发布版本',

  'fc.applications.web.details.delete.button': '删除',
  'fc.applications.web.details.overview.title': '概览',
  'fc.applications.web.details.overview.basic': '基本信息',
  'fc.applications.web.details.overview.basic.appName': '应用名称',
  'fc.applications.web.details.overview.basic.describe': '应用描述',
  'fc.applications.web.details.overview.basic.appType': '应用类型',
  'fc.applications.web.details.overview.basic.createTime': '创建时间',
  'fc.applications.web.details.overview.basic.memory': '内存规格',
  'fc.applications.web.details.overview.event.title': '事件',
  'fc.applications.web.details.event.title': '事件',
  'fc.applications.web.details.resources.title': '资源',
  'fc.applications.web.details.resources.refresh': '刷新',
  'fc.applications.web.details.monitor.title': '监控',
  'fc.applications.web.details.deploy.title': '部署',
  'fc.applications.web.details.setup.title': '设置',
  'fc.applications.web.details.setup.basic.title': '应用基本信息',
  'fc.applications.web.details.setup.start.title': '启动命令设置',
  'fc.applications.web.details.setup.start.command': '启动命令',
  'fc.applications.web.details.setup.start.port': '监听端口',
  'fc.applications.web.details.setup.start.param': '启动参数',
  'fc.applications.web.details.setup.environmentVariable.title': '环境变量设置',
  'fc.applications.web.details.setup.environmentVariable.name': '环境变量名',
  'fc.applications.web.details.setup.environmentVariable.value': '环境变量值',
  'fc.applications.web.details.setup.parma.title': '应用参数',
  'fc.applications.web.homepage.title': '平滑迁移 Web 应用',
  'fc.applications.appTmp.homepage.title': '基于模版创建',
  'fc.applications.appTmp.homepage.more': '更多',
  'fc.applications.web.homepage.upload': '点击或者拖拽上传',
  'fc.applications.web': 'Web 应用',
  'fc.applications.tmp': '模板应用',
  'fc.applications.web.upload_file.title': '发布',
  'fc.applications.web.upload_file.code.label': '代码包来源',
  'fc.applications.web.upload_file.code.local': '上传本地程序',
  'fc.applications.web.upload_file.code.file.button': '选择文件',

  'fc.applications.web.upload_file.processingText':
    '应用发布中，可能需要1 ~ 2分钟，请您耐心等待，不要关闭页面，以免数据丢失。',

  'fc.applications.deploy.deploy.title': '发布信息',
  'fc.applications.deploy.env.title': '环境变量',
  'fc.applications.searchAppStatus.error': '获取创建应用列表失败',
  'fc.applications.WebResources.update': '设置',
  'fc.applications.WebResources.detail': '清单',
  'fc.applications.app.list': '应用列表',
  'fc.sls.Unauthorized-ListLogStore': '缺少 SLS 权限',
  'fc.applications.update.command.versionName': '启动命令设置',
  'fc.applications.resource.versionName': '修改资源',
  'fc.applications.code.size.error': '您没有配置 NAS，代码包不能大于50M',

  // 操作审计
  'fc.audit.title': '操作审计',

  // 资源关联
  'fc.applications.related.title': '关联资源',

  'fc.applications.related.type.label': '资源类型',

  'fc.applications.related.update.tip':
    '修改资源会发布一个新版本，需要在部署页面将该版本切换到主版本才能使相关修改生效',

  'fc.applications.related.type.placeholder': '请选择资源类型',
  'fc.applications.related.type.cname': '域名',
  'fc.applications.related.type.log': '日志服务(SLS)',
  'fc.applications.related.type.rds': '数据库服务',
  'fc.applications.related.type.redis': '缓存服务(Redis)',
  'fc.applications.related.type.vpc': '专有网络',
  'fc.applications.related.type.nas': '文件存储(NAS)',
  'fc.applications.rds.source': '实例来源',

  'fc.applications.rds.source.label':
    '“代购” 实例为函数计算帮助您购买并维护的实例， 导入实例为您自行购买并维护的实例。',

  'fc.applications.rds.import_tpye.purchasing': '代购',
  'fc.applications.rds.import_tpye.import': '导入',
  'fc.applications.rds.import_tpye.import.rds.title': '数据库实例',
  'fc.applications.rds.import_tpye.import.rds.label': '请选择需要导入的数据库实例',

  'fc.applications.rds.import_tpye.import.rds.message':
    '实例列表中的数据与应用所在区域和环境所在 VPC 有关。如果列表中没有出现您想要的实例，请检查应用与实例所在区域是否匹配或者检查网络配置中的 VPC 与实例所在 VPC 是否一致。函数计算将会把当前环境的 ECS 实例 ip 添加到导入的 RDS 实例白名单中。',

  'fc.applications.rds.import_tpye.import.rds.checked': '已选择的数据库实例：',
  'fc.applications.rds.import_tpye.import.rds.null': '暂无数据',
  'fc.applications.rds.import_tpye.import.db_name.label': '数据库名称',
  'fc.applications.rds.import_tpye.import.account_name.label': '账号名称',
  'fc.applications.rds.purchasing.mode': '实例付费模式',

  'fc.applications.rds.purchasing.mode.label':
    '付费模式支持按量付费和包年包月模式。按量付费更灵活，而包年包月模式则价格更便宜，请根据您的选择合适的付费方式。',

  'fc.applications.rds.purchasing.mode.postpaid': '按量付费',
  'fc.applications.rds.purchasing.mode.prepaid': '包年包月',
  'fc.applications.rds.purchasing.vSwitchId': '可用区及交换机',
  'fc.applications.rds.purchasing.vSwitchId.label': '请选择RDS实例所在的可用区及交换机',
  'fc.applications.rds.purchasing.vSwitchId.item': '{id} 可用区（{zId}）',
  'fc.applications.rds.purchasing.database': '数据库类型',
  'fc.applications.rds.purchasing.database.label': 'RDS 支持 MySQL、SQL Server 等数据库类型。',
  'fc.applications.rds.purchasing.engineVersion': '数据库版本',
  'fc.applications.rds.purchasing.engineVersion.label': '请根据您的业务需要选择数据引擎版本',
  'fc.applications.rds.purchasing.series': '系列',
  'fc.applications.rds.purchasing.series.label': '请根据您的业务需要选择数据引擎版本',
  'fc.applications.rds.purchasing.series.advanced': '高可用版',
  'fc.applications.rds.purchasing.series.basis': '基础版',
  'fc.applications.rds.purchasing.save': '存储类型',

  'fc.applications.rds.purchasing.save.label':
    '为满足不同的场景需求，云数据库RDS提供三种数据存储类型：本地SSD盘、SSD云盘和ESSD云盘。推荐使用本地 SSD 将数据存储于本地 SSD 盘，可以降低I/O延时。具体可参考 <a target="#" href="https://help.aliyun.com/document_detail/69795.html">存储类型</a>',

  'fc.applications.rds.purchasing.save.ssd': 'SSD 云盘',
  'fc.applications.rds.purchasing.save.essd': 'ESSD 云盘',
  'fc.applications.rds.purchasing.save.local': '本地 SSD 云盘',
  'fc.applications.rds.purchasing.specification': '规格',

  'fc.applications.rds.purchasing.specification.label':
    '云数据库RDS提供通用型和独享型两种实例规格。通用型被分配的内存和I/O资源，与统一物理机上的其他通用型实例共享cpu和存储资源；独享型具有完全独享的CPU、内存、存储和I/O资源，性能长期稳定，不会因为物理机上其他实例的行为而受到影响。具体见 <a target="#" href="https://help.aliyun.com/document_detail/26312.html">实例规格</a>',

  'fc.applications.rds.purchasing.specification.item': '{nuclear}核 {gb}GB（{type}）',
  'fc.applications.rds.purchasing.specification.type.universal': '通用型',
  'fc.applications.rds.purchasing.specification.type.exclusive': '独享型',
  'fc.applications.rds.purchasing.specification.type.physicalMachine': '独占物理机型',
  'fc.applications.rds.purchasing.specification.code': '规格代码 {code}',
  'fc.applications.rds.purchasing.dBInstanceMemory': '存储空间',

  'fc.applications.rds.purchasing.dBInstanceMemory.label':
    '请根据您的业务需要选择合适的存储大小（单位 GB）',

  'fc.applications.rds.purchasing.dBInstanceName': '库名',

  'fc.applications.rds.purchasing.dBInstanceName.label':
    '数据库的名称。如果为函数计算代购实例，函数计算会帮您创建该库；如果为导入实例，需要保证该库已经存在（数据库的名称规则为以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-），不能以 http:// 和 https:// 开头）。',

  'fc.applications.rds.purchasing.dBInstanceName.extra':
    '以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-），不能以 http:// 和 https:// 开头。',

  'fc.applications.rds.purchasing.username.extra':
    '以字母开头，以字母或数字结尾，由小写字母、数字或下划线组成。',

  'fc.applications.rds.purchasing.dBInstanceName.placeholder': '请输入数据库名称',
  'fc.applications.rds.purchasing.code_zone': '字符集',

  'fc.applications.rds.purchasing.code_zone.label':
    '数据库的字符集，MySQL 和 MariaDB 默认采取 utf8mb4；SQL Server默认采取 Chinses_PRC_CI_AS',

  'fc.applications.rds.purchasing.username': '账户名称',

  'fc.applications.rds.purchasing.username.label':
    '数据库账户的名称。如果为代购实例，会帮您创建此账号；如果为导入实例，需要您保证账户号正确（账户名称规则为以字母开头，以字母或数字结尾，由小写字母、数字或下划线组成）。',

  'fc.applications.rds.purchasing.username.placeholder': '请输入账户名称',
  'fc.applications.rds.purchasing.password': '密码',
  'fc.applications.rds.purchasing.password2': '确认密码',

  'fc.applications.rds.purchasing.password.extra':
    '由大写字母、小写字母、数字、特殊字符中的任意三种组成，特殊字符为!@#$&%^*()_+-=',

  'fc.applications.rds.purchasing.password.label':
    '数据库账户的密码。如果为导入实例，需要您您保证账户密码正确（密码规则为大小写、数字、特殊符号占三种，长度为8-32位，特殊符号为!@#¥%*&()_+-=）。',

  'fc.applications.rds.purchasing.password.input.placeholder': '请输入密码',
  'fc.applications.rds.purchasing.password.input.placeholder2': '请输入确认密码',
  'fc.applications.rds.purchasing.password.input.error': '两次密码输入需要一致',
  'fc.applications.resources.fc.serviceAndFunction.label': '服务 / 函数',
  'fc.applications.resources.fc.runtime.label': '运行时',
  'fc.applications.resources.fc.memorySize.label': '内存',
  'fc.applications.resources.fc.timeout.label': '超时',
  'fc.applications.resources.setUp.button': '设置',
  'fc.applications.resources.details.button': '资源详情',
  'fc.applications.resources.delete.button': '删除',
  'fc.applications.resources.cname_extend.button': '延长有效期',
  'fc.applications.resources.cname.name.label': '域名名称',
  'fc.applications.resources.cname.type.label': '类型',
  'fc.applications.resources.cname.type.snap': '临时',
  'fc.applications.resources.cname.type.lasting': '永久',
  'fc.applications.resources.cname.expireTime.label': '过期时间',
  'fc.applications.resources.rds.title': '数据库服务',
  'fc.applications.resources.rds.type': '类型',
  'fc.applications.resources.rds.dbname': '数据库名称',
  'fc.applications.resources.rds.surroundings': '环境变量',
  'fc.applications.resources.nas.name.label': '文件系统名称',
  'fc.applications.resources.nas.serverAddr.label': '源目录',
  'fc.applications.resources.nas.mountDir.label': '目标目录',
  'fc.applications.resources.nas.user.label': '用户：组',
  'fc.applications.resources.vSwitchIds.label': '交换机',
  'fc.applications.resources.securityGroupId.label': '安全组',
  'fc.applications.resources.showPanel.button': '关联资源',
  'fc.applications.redis.title': '缓存服务(Redis)',
  'fc.applications.redis.source': '实例来源',

  'fc.applications.redis.label':
    '“代购”实例为函数计算帮助您购买并维护的实例， 导入实例为您自行购买并维护的实例。',

  'fc.applications.redis.import_tpye.purchasing': '代购',
  'fc.applications.redis.import_tpye.import': '导入',
  'fc.applications.redis.import_tpye.import.redis.title': 'Redis实例',
  'fc.applications.redis.import_tpye.import.redis.label': '使用已有的Redis实例',
  'fc.applications.redis.import_tpye.import.redis.checked': '已选择的Redis实例：',
  'fc.applications.redis.data_null': '暂无数据',
  'fc.service.details.redis.dBInstanceId': '实例 ID',
  'fc.service.details.redis.database': '数据库版本',
  'fc.service.details.redis.specifications': '实例规格',
  'fc.service.details.redis.state': '状态',
  'fc.applications.redis.password.lable': '密码',
  'fc.applications.redis.purchasing.password.placeholder': '请输入密码',
  'fc.applications.redis.purchasing.validapassword.placeholder': '请输入确认密码',

  'fc.applications.redis.introduce':
    '数据库账户的密码。如果为导入实例，需要您您保证账户密码正确（密码规则为大小写、数字、特殊符号占三种，长度为8-32位，特殊符号为!@#¥%*&()_+-=）',

  'fc.applications.redis.web.required.error': '值不能为空',
  'fc.applications.redis.purchasing.mode': '实例付费模式',

  'fc.applications.redis.purchasing.mode.label':
    '付费模式支持按量付费和包年包月模式。按量付费更灵活，而包年包月模式则价格更便宜，请根据您的选择合适的付费方式。',

  'fc.applications.redis.purchasing.mode.postpaid': '按量付费',
  'fc.applications.redis.purchasing.mode.prepaid': '包年包月',
  'fc.applications.redis.purchasing.vSwitchId': '交换机',

  'fc.applications.redis.purchasing.vSwitchId.label':
    '请选择 Redis 实例所在的交换机（星型标记的交换机为当前环境的默认交换机）',

  'fc.applications.redis.purchasing.version': '版本类型',
  'fc.applications.redis.purchasing.version.label': 'Redis 有两种版本类型，即社区型和企业型。',
  'fc.applications.redis.purchasing.series': '架构系列',
  'fc.applications.redis.purchasing.series.label': '请根据您的业务需要选择数据引擎版本',

  'fc.applications.redis.purchasing.scenario.label':
    'Redis支持三种架构类型：标准版、集群版和读写分离版。您可根据业务场景选用不同架构的实例。',

  'fc.applications.redis.purchasing.engineVersion': '数据库版本',
  'fc.applications.redis.purchasing.engineVersion.label': '请根据您的业务需要选择数据引擎版本',
  'fc.applications.redis.purchasing.series.advanced': '标准版',
  'fc.applications.redis.purchasing.series.basis': '集群版',
  'fc.applications.redis.purchasing.series.save': '读写分离版',
  'fc.applications.redis.purchasing.node': '节点类型',
  'fc.applications.redis.purchasing.node.lable': 'Redis有两种节点类型：双副本和只读节点。',
  'fc.applications.redis.purchasing.node.lable.double': '双副本',
  'fc.applications.redis.purchasing.node.lable.read': '只读',
  'fc.applications.redis.purchasing.node.lable.read1': '只读节点（1个）',
  'fc.applications.redis.purchasing.node.lable.read3': '只读节点（3个）',
  'fc.applications.redis.purchasing.node.lable.read5': '只读节点（5个）',
  'fc.applications.redis.instanceClass.basis.doublelabel': '{size}G 集群版（{num}节点）',

  'fc.applications.redis.instanceClass.save.label':
    '读写分离{size}G版（{num}节点，每节点{onlySize}只读）',

  'fc.applications.redis.enterprise.advanced.label': '{size}GB主从版性能增强',
  'fc.applications.redis.enterprise.basis.label': '{size}G集群性能增强版',

  'fc.applications.redis.enterprise.save.label':
    '{size}G读写分离性能增强版（{num}节点{onlySize}只读）',

  'fc.applications.redis.purchasing.specification.label':
    '请根据您的业务需要选择适合的实例规格。详细的规格信息请参考 <a target="#" href="https://help.aliyun.com/document_detail/26350.html">文档</a>',

  'fc.applications.redis.purchasing.specification.code': '规格代码 {code}',
  'fc.applications.redis.purchasing.vSwitchId.item': '{id} 可用区（{zId}）',
  'fc.applications.redis.item.community': '社区型',
  'fc.applications.redis.item.enterprise': '企业型',
  'fc.applications.redis.instanceName': '实例名称',

  'fc.applications.redis.instanceName.label':
    '必须以字母或汉字开始，可以包含字母、数字、汉字、下划线（_）、连字符（-）、和点号（.）。',

  'fc.applications.redis.instanceName.placeholder': '请输入实例名称',
  'fc.applications.delet.tip': '确定要取消关联 {resources} 吗？',
  'fc.applications.delet.endNasconfig.tip': '如果删除了最后一个文件配置可能会导致再发布失败。',

  // 指标
  'fc.service.metrics': '服务指标',

  'fc.metrics.picker_label': 'Time Range',
  'fc.metrics.select_label': 'Last',
  'fc.metrice.granularity': '粒度',
  'fc.metrice.granularity.unit': '秒',
  'fc.metrice.time.one_hours': '1 小时',
  'fc.metrice.time.one_days': '24 Hours',
  'fc.metrice.time.one_weeks': '7 天',
  'fc.metrice.time.customize': '自定义',
  'fc.metrics.number.clent_errors': '客户端错误（次）',
  'fc.metrics.number.function_errors': '函数错误（次）',
  'fc.metrics.number.service_errors': '服务端错误（次）',
  'fc.metrics.number.total_invocathions': '总调用次数',
  'fc.metrics.rate.clent_errors': '客户端错误率（%）',
  'fc.metrics.rate.function_errors': '函数错误率（%）',
  'fc.metrics.rate.service_errors': '服务端错误率（%）',
  'fc.metrics.rate.concurrency': '并发度',
  'fc.function.metrics': '函数指标',
  'fc.metrics.memory_usage': '内存使用（MB）',
  'fc.metrics.execution_time': '执行时间（ms）',
  'fc.metrics.total_calls': '总调用次数（次）',
  'fc.metrics.legend.client_errors': '客户端错误',
  'fc.metrics.legend.service_errors': '服务端错误',
  'fc.metrics.legend.total_invocathions': '总调用次数',
  'fc.metrics.legend.function_errors': '函数错误',
  'fc.metrics.legend.errors_bout': '错误（次）',
  'fc.metrics.legend.errors_rate': '错误率（%）',

  // 资源中心
  'fc.resource.title': '资源中心',

  'fc.resource.use.detail': '资源使用详情',
  'fc.resource.configuration.help': '配置帮助：',
  'fc.resource.capacity_power': '计算力',
  'fc.resource.capacity_unit': '单位 CU（Capacity Unit）',
  'fc.resource.practical.capacity_unit': '实用计算力',
  'fc.resource.actual_use.capacity_unit': '实际使用计算力',
  'fc.resource.legend.max_actual_use': '实际使用计算力（Max）',
  'fc.resource.legend.avg_actual_use': '实际使用计算力（Avg）',
  'fc.resource.legend.prepaid_actual_use': '预付费计算力',
  'fc.resource.actual_use.capacity_unit.description': '当前账户下所有函数实际使用计算力总和。',
  'fc.resource.prepaid.capacity_unit': '预付费计算力',

  'fc.resource.prepaid.capacity_unit.description':
    '以预付费的形式预先购买的计算力，购买 100 CU 表示每秒可使用 100 CU 的计算力，超出预付费的部分将按照后付费单价计费。',

  'fc.resource.configuration.note': '注：预付费方式购买的计算力价格便宜很多！',

  'fc.resource.configuration.suggest':
    '合理购买预付费计算力将有效降低成本，请根据实际使用计算力进行评估。',

  'fc.resource.configuration.buy': '购买',
  'fc.resource.configuration.buy_note': '注：预付费计算力在到期时间后自动失效，请及时续费。',
  'fc.resource.buy_history': '资源购买历史',
  'fc.resource.id.buy_history': '实例 ID',
  'fc.resource.status.buy_history': '资源状态',
  'fc.resource.status.buy_history.true': '运行中',
  'fc.resource.status.buy_history.false': '已过期',
  'fc.resource.buy.buy_history': '已购计算力（CU）',
  'fc.resource.buy_date.buy_history': '购买时间',
  'fc.resource.expire_date.buy_history': '到期时间',
  'fc.resource.automatic.buy_history': '自动续费',
  'fc.resource.automatic.buy_history.opened': '已开启',
  'fc.resource.automatic.buy_history.unopened': '未开启',
  'fc.resource.refill.buy_history': '续费',
  'fc.resource.upgrade.buy_history': '升配',

  'fc.resource.disable.operate':
    '订单系统正在升级，暂时无法对此实例进行升配和续费操作，请您重新创建实例，如有问题，请提工单联系我们。',

  // 预留
  'fc.reserved.details': '预留资源',

  'fc.reserved.instance.billing_instructions': '计费说明：预留模式的执行时长根据实例的运行时长计费，其执行时长的计量是从函数计算系统启动预留模式实例开始，到您主动释放为止。因此，即使预留模式实例未执行任何请求，只要没有释放预留模式实例，您都需要为预留模式付费。<a href="https://help.aliyun.com/document_detail/54301.html?spm=a2c4g.11186623.2.14.4b344085qlBrQP#title-1io-1mb-a9n" target="#">查看详情</a>',
  'fc.reserved.instance': '预留实例',
  'fc.reserved.instance_number': '预留模式实例数',
  'fc.reserved.current.instance_number': '预留模式实例数',
  'fc.reserved.instance_number.label': '预留模式实例个数：',
  'fc.reserved.update.instance_number': '修改实例数',
  'fc.reserved.instance_details': '您已为 {targetName} 预留 {instanceNumber} 个实例',
  'fc.reserved.reserved': '编辑',
  'fc.reserved.reserved.delete.message': '已删除',
  'fc.reserved.create_reserved': '新建预留',
  'fc.reserved.alias.error': '别名不能为空',
  'fc.reserved.create_reserved.help.tip': '不能直接在LATEST版本下创建预留实例，您需要新建一个版本和别名后才能添加预留实例，如何新建版本和别名请参考 <a href="https://help.aliyun.com/document_detail/96464.html" target="_blank">创建版本和别名</a>',

  'fc.reserved.be_applicable':
    '为函数预留实例将避免动态分配实例带来的冷启动时延，非常适用于时延敏感场景',

  'fc.reserved.priority_use': '函数计算会优先使用您预留的实例',
  'fc.reserved.insufficient_details': '当实际请求所需实例大于预留实例数时，会为函数动态分配实例',
  'fc.reserved.version.tip': '已经选择了某一个版本，只有别名下的函数预留实例。',
  'fc.reserved.legend.actual_use': '实际使用实例',
  'fc.reserved.legend.max_actual_use': '实际使用实例（Max）',
  'fc.reserved.legend.avg_actual_use': '实际使用实例（Avg）',
  'fc.reserved.legend.instance_number': '预留模式实例数',
  'fc.reserved.legend.instance_monitoring_chart_title': '实例数监控图',
  'fc.reserved.legend.instance_reserved_num_info': '注意：如果要释放预留模式实例请手动将预留实例数设置为 0。',
  'fc.reserved.tip': '数据更新截至到 {endTime}',
  'fc.get.data.is_null': '没有查到数据。',
  'fc.reserved.instance.title': '实例数',
  'fc.function_name.form.label': '函数名称：',
  'fc.time_picker.error': 'StartTime must small then endTime.',

  'fc.reserved.not_supported.error':
    '账号 {userId} 尚不支持预留模式，<a href="https://help.aliyun.com/document_detail/53087.html" target="#">联系我们</a>添加该账号到白名单',

  'fc.linechar.data_null': '暂无数据',
  'fc.linechar.data_null_function': '请选择函数名称',
  'fc.reserved.concurrency': '按量资源',
  'fc.function.concurrency_name': '函数并发度',
  'fc.function.concurrency': '配置实例数',
  'fc.function.concurrency.config.title': '配置按量资源实例',
  'fc.function.concurrency_number.label': '最大实例数',
  'fc.function.concurrency_number.rule.message': '请填写函数并发度',
  'fc.function.concurrency.err.message': '新增并发度失败',
  'fc.function.concurrency.delets': '删除',
  'fc.function.concurrency.delets.confirm': '确认删除该预留配置吗？',
  'fc.function.concurrency.delets.operation': '操作',
  'fc.function.concurrency.delets.err': '删除失败',
  'fc.function.concurrency.delets.success': '删除成功',
  'fc.function.concurrency.config.success': '配置成功',
  'fc.function.concurrency.config.one': '配置',
  'fc.function.concurrency.add_config.one': '新增配置',
  'fc.function.concurrency.delete.sure.content': '确认删除函数（{texts}）的并发度配置吗？',
  'fc.reserved.reserved.strategy_name': '策略名称',
  'fc.reserved.reserved.strategy_name.required': '策略名称不能为空',
  'fc.reserved.reserved.strategy_name.existing': '策略名称已存在',
  'fc.reserved.reserved.take_effect': '生效时间（UTC）',
  'fc.reserved.reserved.take_effect.required': '生效时间不能为空',
  'fc.reserved.reserved.cron_expression': '定时表达式（UTC）',
  'fc.reserved.reserved.cron_expression.required': '定时表达式不能为空',
  'fc.reserved.reserved.operation': '操作',
  'fc.reserved.reserved.indicators_type': '指标类型',
  'fc.reserved.reserved.indicators_type.values': '指标目标值',
  'fc.reserved.reserved.indicators_type.values.min': '最小预留实例个数：',
  'fc.reserved.reserved.indicators_type.values.max': '最大预留实例个数：',
  'fc.reserved.reserved.scale_range': '伸缩范围',
  'fc.reserved.reserved.scale_type.scheduled': '定时伸缩：',
  'fc.reserved.reserved.scale_type.indicators': '指标伸缩：',
  'fc.reserved.reserved.scale_type.targetTrackingpolicies': '指标追踪伸缩',
  'fc.reserved.reserved.config': '配置方法：',
  'fc.reserved.reserved.config.simple': '简单配置',
  'fc.reserved.reserved.config.scaling': '自动伸缩配置',
  'fc.reserved.instance.config.number': '预留数量',
  'fc.reserved.instance.config.save': '添加伸缩配置',
  'fc.reserved.instance.config.close': '取消配置',
  'fc.reserved.instance.config.utilizationType': '预留实例并发利用率',
  'fc.reserved.instance.config.utilizationType.required': '指标类型不能为空',
  'fc.reserved.reserved.strategy_name.existing.message': '长度1-32个字符，以大小写字母开头',

  // 体验
  'fc.guide.hello.title': '新手上路',

  'fc.guide.quick_grasp': '五分钟快速了解函数计算',
  'fc.guide.invoke': '执行/部署',
  'fc.guide.hello.invoke': '执行',
  'fc.guide.deploy': '部署',
  'fc.guide.input': '输入值',
  'fc.guide.code': '代码',
  'fc.guide.output': '执行结果',
  'fc.guide.next.button': '继续体验：',
  'fc.guide.quickBuild.title': '快速搭建',
  'fc.guide.chart.title': 'Storage（MB）',
  'fc.guide.copy.succ': '复制成功',

  'fc.guide.quickBuild.congratulations':
    '恭喜您已经成功运行了一个函数，下面我们尝试下一个完整的应用吧。',

  'fc.guide.quickBuild.select_title': '选择一个感兴趣的示例体验',
  'fc.guide.quickBuild.todoList.title': '搭建一个 TODO List 应用',
  'fc.guide.quickBuild.puppeteer.title': 'puppeteer 网页截图服务',
  'fc.guide.quickBuild.hello_world.title': 'Hello World 示例',
  'fc.guide.completeTutorial.next': '下一步',
  'fc.guide.completeTutorial.list1': '从简单的函数开始创建',
  'fc.guide.completeTutorial.list2': '创建更多有趣应用',
  'fc.guide.completeTutorial.list3': '了解收费标准',
  'fc.guide.completeTutorial.list4': '阅读开发指南',
  'fc.guide.to_gudie': '新手向导',
  'fc.guide.createTodoList.title': '搭建一个 TODO List 应用',
  'fc.guide.createTodoList.rapid.positioning': '快速定位',
  'fc.guide.createTodoList.deploy': '部署',
  'fc.guide.createTodoList.access.link': '访问链接',

  'fc.guide.createTodoList.temporary_cname':
    '为方便您快速体验，函数计算为您生成临时域名，临时域名仅生效两小时，如果想继续使用请前往 {node} 绑定域名',

  'fc.guide.puppeteer.screenshot.tool.title': 'Puppeteer 网页截图工具',

  'fc.guide.puppeteer.screenshot.tool.description.one':
    '接下来，我们快速搭建一个基于 Puppetter 的网页截图服务，该服务根据请求参数中的网页地址进行网页截图。注意：此示例代码修改无效。',

  'fc.guide.depley.success': '部署成功',
  'fc.guide.invoke.success': '执行成功',
  'fc.guide.bind_cname.error': '绑定自定义域名失败',
  'fc.guide.puppeteer.screenshot.tool.input.address': '输入网址',
  'fc.guide.puppeteer.screenshot.tool.implement': '立即截图',
  'fc.guide.createTodoList.second.description': '接下来，我们快速搭建一个基于内存存储待办事项的 TODO List 应用，在生产环境中，需要需要将内存存储替换成数据库存储。在下面的代码中，您可以通过修改 src/index.js 文件并重新部署更新应用。',
  'fc.guide.leapfrog': 'Exit Demo',
  'fc.guide.output.next': '点击执行才能继续下一步',
  'fc.guide.output.next.tip': '点击部署才能继续下一步',
  'fc.guide.output.extra': '本次调用的时长费用为：￥{cost}，仅占您免费额度的 {quota}，每月前 400000（CU-秒）调用时长费用免费。',
  'fc.guide.hello.log.cost.storage_cost': '本次资源消耗',
  'fc.guide.hello.log.cost.free_tier_quota': 'Free Tier Quota',
  'fc.guide.hello.log.cost.cost': 'Cost',
  'fc.guide.hello.log.cost.metrics': 'Function Compute provides … and … ; for more metrics and tracing, see <a href="https://help.aliyun.com/document_detail/53010.html" target="#">Monitoring Center.</a>',
  'fc.guide.puppeteer.tip': '根据输入的网页地址，生成对应的网页截图。',
  'fc.guide.createTodoList.tip': '支持待办事项增加、删除和标记操作的简单 TODO List 应用',
  'fc.guide.dynamic_domain.error': '域名解析失败',
  'fc.guide.over': '完成',
  'fc.guide.hello.input.tip': 'An event is a custom function input in the form of byte stream for a function to process. For functions invoked by different triggers such as an event source service, SDK, etc. the value of the event parameter will be different. See <a href="https://help.aliyun.com/document_detail/157704.html#title-h6i-rwb-mkp" target="#">Documentation.</a> for details. ',
  'fc.guide.hello.code.js_tip': 'A function is a resource that you can invoke to run your code in Function Compute. A function has code to process the events that you pass into the function or that other source services send to the function. For more information, see <a href="https://help.aliyun.com/document_detail/157704.html" target="#">Documentation.</a>',
  'fc.guide.hello.code.tip': '代码中的函数可以通过 event 获取上面的输入值，然后 return 返回数据。',
  'fc.guide.hello.output.tip': '输出值为上面代码中的函数返回的数据或者错误。',
  'fc.guide.hello.log.tip': '执行日志可以帮助您进行代码调试、故障分析、数据分析等操作。',
  'fc.guide.hello.log.help': 'The section below shows the logging calls in your code. These correspond to a single row within the log group corresponding to this function. The execution logs can be used for debugging,troubleshooting errors and analytics.',
  'fc.guide.hello.log.cost': 'Monitoring & Cost',
  'fc.guide.puppeteer.button.tip': '以下示例代码修改无效。',
  'fc.guide.button.straightway': '立即执行',
  'fc.guide.button.cannot': '不了',
  'fc.guide.button.tip': '您确定要退出吗？',
  'fc.guide.button.title': '提示',
  'fc.guide.guide.title': 'Choose a demo project to start!',
  'fc.guide.guide.introduction': '选择感兴趣的场景开始体验吧！',
  'fc.guide.introduction.hello.tag': '新手起航',
  'fc.guide.introduction.hello.tip': '1分钟了解函数计算',
  'fc.guide.introduction.screenShot.tag': '函数进阶',
  'fc.guide.introduction.screenShot.title': 'To-do List Web App',
  'fc.guide.introduction.todo.title': 'To-do List Web App',
  'fc.guide.introduction.hello.title': 'Hello, World!',
  'fc.guide.guide.hexo.title': 'Hexo Blog',
  'fc.guide.introduction.screenShot.tip': '根据输入的网页地址，生成对应的网页截图',
  'fc.guide.screenShot.tip': '接下来，我们快速搭建一个基于 Puppetter 的网页截图服务，该服务根据请求参数中的网址进行网页截图。',
  'fc.guide.screenShot.bottom.tips': '小贴士：该服务采用函数计算的应用模板部署，可在应用中心…丰富的应用模板及 Web 框架，方便您调用。',
  'fc.guide.todolist.step.1': 'App Template',
  'fc.guide.todolist.1.1.title': 'Create an application from a Function Compute application template',
  'fc.guide.todolist.1.1.tip': 'Function Compute (FC) Application Center provides application template that … Content TBD Try to use the template below to create a To-do List application:',
  'fc.guide.todolist.config.btn': 'Config',
  'fc.guide.todolist.1.2.title': 'Application Name',
  'fc.guide.todolist.1.3.title': 'Preview Resource',
  'fc.guide.todolist.1.3.tip': 'A function is a resource that you can invoke to run your code in Function Compute. A function has code to process the events that you pass into the function or that other source services send to the function. For more information, see Documentation.',
  'fc.guide.todolist.table.isnull.tip': '点击 + 获取数据',
  'fc.guide.todolist.table.hide.tip': '点击 - 显示数据',
  'fc.guide.todolist.2.config.title': 'Configuration',
  'fc.guide.todolist.2.title': 'Deploy',
  'fc.guide.todolist.3.title': 'Result',
  'fc.guide.todolist.3.1.title': 'Output',
  'fc.guide.todolist.3.1.tip': 'HttpTriggerEndpoint…',
  'fc.guide.todolist.3.2.tip': '阿里云函数计算（FC）产品为您提供了完善的监控告警系统，通过函数计算的监控中心，可以看到调用次数、内存消耗、各类错误详情以及进行链路追踪、日志查看等，部分可观测性的示意效果图如下，真实的客观测性可跳转<a href="https://help.aliyun.com/document_detail/92647.html" target="_blank">监控中心</a>',
  'fc.guide.todolist.3.2.title': 'Monitoring & Cost',
  'fc.guide.todolist.3.3.storage_cost': '本次资源消耗',
  'fc.guide.todolist.3.3.free_tier': 'Free Tier Quota',
  'fc.guide.todolist.3.3.cost.metrics': '',
  'fc.guide.tool.install.title': 'Install S Tool',
  'fc.guide.tool.install.tip': 'In this session, we will deploy a Hexo Blog with Serverless Devs (<a href="https://github.com/Serverless-Devs-Awesome/hexo-alibaba-component" target="#">Github<i class="next-icon next-icon-external-link-alt next-xs"></i></a>). Serverless Devs is the 1st open source cloud native platform that supports full-lifecycle management of serverless services and frameworks. It provides developer tools and application center that helps you deploy serverless projects with enhanced R&D efficiency, and also supports multiple cloud environments…',
  'fc.guide.tool.install.tip2': 'S Tool has been pre-installed to the online IDE… You may jump to “Initialize Project”and start to playaroud!',
  'fc.guide.tool.init.title': 'Initialize Project',
  'fc.guide.tool.enter.title': 'Enter Project',
  'fc.guide.tool.deploy.title': 'Deploy',
  'fc.guide.tool.deploy.tip': 'If you need to configure keys, see <a href="https://github.com/Serverless-Devs/docs" target="#">Documentation</a>',
  'fc.guide.tool.deploy.connected.clounshell': '正在链接 Cloud Shell',
  'fc.guide.todolist.next.btn.1': 'Application Center',
  'fc.guide.introduction.tool.tag': '应用大师',
  'fc.guide.introduction.tool.title': '图像风格迁移',
  'fc.guide.introduction.tool.tip': '开发者体验仿真，通过S工具快速部署AI应用',
  'fc.guide.hello.step.1.content': 'Programming',
  'fc.guide.hello.step.2.content': '部署',
  'fc.guide.hello.step.3.content': '查看结果&日志',
  'fc.guide.hello.step.3.title': 'Execute',
  'fc.guide.hello.step.4.content': 'Result',
  'fc.guide.hello.step.4.tip': 'The area below shows the result returned by your function execution.',
  'fc.guide.hello.next.btn': '部署一个网页截图服务',
  'fc.guide.hello.next.btn.1': 'View Function Details',
  'fc.guide.hello.next.btn.2': 'Next Demo',
  'fc.guide.tool.intro.title': '项目说明',
  'fc.guide.tool.intro.content': '通过 Serverless Devs 开源工具快速部署一个图像增强类的AI应用（图像风格迁移），按照指定的风格，改变输入图像的色彩、笔触等视觉风格。',
  'fc.guide.tool.step1.title': '项目准备',
  'fc.guide.tool.install.tool.label': '安装工具',
  'fc.guide.tool.install.tool.value.mac': '针对Mac用户与Linux用户：',
  'fc.guide.tool.install.tool.value.interchangeable': '通用方案（请确认已安装node及npm）：',
  'fc.guide.tool.init.label': '初始化项目',
  'fc.guide.tool.cd.label': '进入项目',
  'fc.guide.tool.deploy.label': '项目部署',
  'fc.guide.tool.output.label': '执行结果',
  'fc.guide.tool.output.value.tip': '以下为示例图片风格迁移结果，可下载示例图片对您部署的应用进行验证',
  'fc.guide.tool.step2.title': '部署',
  'fc.guide.tool.step2.tip': '中途如需配置用户密钥，请 <a href="https://github.com/Serverless-Devs/docs/blob/master/docs/zh/others/%E5%AF%86%E9%92%A5%E7%9B%B8%E5%85%B3/%E9%98%BF%E9%87%8C%E4%BA%91%E5%AF%86%E9%92%A5%E8%8E%B7%E5%8F%96.md" target="#">参考</a>',
  'fc.guide.tool.step3.title': '查看结果&日志',
  'fc.guide.tool.step3.style.tip': '示例原图',
  'fc.guide.tool.step3.style.ed.tip': '风格迁移结果',
  'fc.guide.tool.step3.reference': '风格参考图',
  'fc.function.mirror': '镜像',
  'fc.function.command': '启动命令',
  'fc.function.parameter': '参数',
  'fc.function.image.required': '容器镜像不能为空',
  'fc.function.listening.port.required': '监听端口不能为空',
  'fc.function.runtime.listening.port': '监听端口',
  'fc.function.runtime.command': 'Command',
  'fc.function.runtime.image': '容器镜像',
  'fc.function.runtime.image.choose': '选择容器镜像',
  'fc.function.runtime.image.choose.tip': '创建镜像函数，需同时选取镜像和版本',
  'fc.function.runtime.image.required': '镜像只能位于阿里云容器镜像服务',
  'fc.function.runtime.image.example': '如:',

  'fc.function.runtime.server.required':
    'custom-container 需要为该服务的 role 配置 AliyunContainerRegistryReadOnlyAccess 权限',

  'fc.reserved.not_supported.image':
    '账号 {userId} 尚不支持容器镜像功能， <a href="https://help.aliyun.com/document_detail/53087.html" target="#">联系我们</a>添加该账号到白名单',

  'fc.function.runtime.args': 'Args',
  'fc.function.runtime.choose.version': '选择版本',
  'fc.function.runtime.isopen': '容器镜像服务未开通，前往<a href="https://cr.console.aliyun.com/" target="#"> 开通</a>',

  // destination配置
  'fc.destination.config': 'Destination配置',

  'fc.destination.asyn.config': '异步配置',
  'fc.destination.config.target.type': '目标类型',
  'fc.destination.config.target.title': '目标',
  'fc.destination.config.save': '保存配置',
  'fc.destination.config.save.success': '保存成功',
  'fc.destination.config.delete': '删除配置',
  'fc.destination.config.delete.success': '配置已删除',
  'fc.destination.config.err.title': '配置错误',
  'fc.destination.config.err.message': '请至少选填一项配置',
  'fc.destination.config.item.target': '目标配置',
  'fc.destination.config.item.server': '服务:',
  'fc.destination.config.item.version': '-版本',
  'fc.destination.config.item.alias': '-别名',
  'fc.destination.config.item.version_alias': '版本/别名:',
  'fc.destination.config.item.function': '函数:',
  'fc.destination.config.item.queuename': '队列名:',
  'fc.destination.config.item.topics': '主题名:',
  'fc.destination.config.item.eventbridge': '事件名:',
  'fc.destination.config.conditions.error': '条件: 失败时',
  'fc.destination.config.conditions.success': '条件: 成功时',
  'fc.destination.config.asyn.strategy': '异步策略配置',
  'fc.destination.config.max.retryCount': '最大重试次数',
  'fc.destination.config.max.messageCount': '消息最大有效期(s)',
  'fc.destination.config.asyn.perform.arn': '异步执行目标的资源ARN',
  'fc.destination.config.asyn.target.type': '配置异步执行目标的类型',

  'fc.destination.config.asyn.invoke':
    '若收到异步 invoke 请求消息到实际执行的时间间隔大于该时间，则消息将被抛弃，函数不会被触发',

  'fc.destination.config.asyn.max.retryCount': '异步执行失败后最大重试次数',
  'fc.destination.config.asyn.actual.resources': '配置异步执行目标实际资源',
  'fc.destination.config.fc.permissions': '需要为该服务的 role 配置 fc:InvokeFunction 权限',
  'fc.destination.config.mns.queue': '需要为该服务的 role 配置 mns:SendMessage 权限',
  'fc.destination.config.mns.topics': '需要为该服务的 role 配置 mns:PublishMessage 权限',
  'fc.metrics.destination.errors': '异步调用目标发送失败次数（次）',
  'fc.metrics.destination.success': '异步调用目标发送成功次数（次）',
  'fc.metrics.destination.expiredDropped': '异步消息超时丢弃（个）',
  'fc.metrics.destination.call.title': '异步调用目标发送指标',
  'fc.metrics.destination.timeout.title': '异步消息超时丢弃',
  'fc.rocketmq.destination.mqinstanceid': '实例 ID',
  'fc.rocketmq.destination.topicname': 'Topic 名称',
  'fc.rocketmq.destination.tip': '输入内容不能为 %',

  // 新概览页
  'fc.metrics.invoke_number.free': '本月全地域免费执行次数：100 万次',

  'fc.metrics.unit.million': '100 万次',
  'fc.metrics.resource.invoke.unit.cu': '40万',

  'fc.metrics.invoke_number.free.icon':
    '每月前 100 万次函数调用免费。您的云账户与 RAM 账号共享每月的免费的调用次数和执行时间额度。 <a class="mockAStyle" href="https://help.aliyun.com/document_detail/54301.html" target="_blank">详情</a>',

  'fc.metrics.net_used.free': '本月全地域免费资源使用量：40万 CU-S',

  'fc.metrics.net_used.free.icon':
    '每月前 40万（CU-秒）费用免费。您的云账户与 RAM 账号共享每月的免费的调用次数和执行时间额度。 <a class="mockAStyle" href="https://help.aliyun.com/document_detail/54301.html" target="_blank">详情</a>',

  'fc.metrics.tooltip.title.notice.measur': '计量数据每小时更新，准确计量请参考',
  'fc.metrics.tooltip.title.notice.cost': ' 费用中心',
  'fc.metrics.tooltip.title.notice.measur.expectcost': '，预估费用请用',
  'fc.metrics.tooltip.title.notice.measur.calculate': ' 价格计算器',
  'fc.overview.addbar.basicdata': '基础数据',
  'fc.overview.main.endpoint.title': '主账号',
  'fc.overview.public.accessKey.title': 'AccessKey',
  'fc.overview.helpcenter': '帮助中心',
  'fc.overview.Communication-group': '交流群',
  'fc.overview.scan.Communication-group': '扫码加入函数计算钉钉交流群',
  'fc.overview.close.Communication-group': '关闭',
  'fc.overview.practice': '客户实践',
  'fc.development_help.fc': '什么是函数计算（FC）？',
  'fc.development_help.server': '如何快速使用函数计算相关服务',
  'fc.development_help.introduction': '快速迁移Web框架到函数计算（FC）',
  'fc.development_help.database': '如何通过函数计算访问（链接）数据库',
  'fc.development_help.coldstart': '函数计算冷启动优化最佳实践',
  'fc.applications.web.create.language.Nodejs': 'Node.JS框架',
  'fc.applications.web.create.language.Java': 'Java Web',
  'fc.applications.web.create.language.Go': 'Go 框架',
  'fc.applications.web.create.language.PHP': 'PHP 框架',
  'fc.applications.web.create.language.Python': 'Python Web',
  'fc.applications.web.create.language.NetCore': '.NET Core',
  'fc.applications.web.introduction.title': '入门简介',
  'fc.applications.web.introduction.Create': '新建项目',
  'fc.applications.web.introduction.Upload': '上传代码',
  'fc.applications.web.introduction.Trigger': '设置触发器',
  'fc.applications.web.introduction.Invoke': '函数执行',
  'fc.applications.web.introduction.Cost': '按量付费',

  'fc.applications.web.introduction.Create.detail':
    '在控制台<a href="{URL}">新建函数</a>，或者本地创建项目',

  'fc.applications.web.introduction.Upload.detail': '在控制台编写代码，或者通过命令行工具上传',
  'fc.applications.web.introduction.Trigger.detail': '设置其他云服务事件触发函数执行 <a href="https://help.aliyun.com/document_detail/53102.html" target="#">详情</a>',
  'fc.applications.web.introduction.Invoke.detail': '函数被触发时，将按照预定的规则<a href="https://help.aliyun.com/document_detail/52895.html" target="#">弹性伸缩</a>',
  'fc.applications.web.introduction.Cost.detail': '不执行不收费，按照实际用量收费 <a href="https://help.aliyun.com/document_detail/54301.html" target="#">计费详情</a>',
  'fc.applications.web.monitor.title': '监控概览',
  'fc.applications.appTmp.homepage.all': '全部模版',
  'fc.applications.appTmp.homepage.more_detail': '更多详情',
  'fc.applications.web.monitor.server.error': '服务端调用错误 (次)',
  'fc.applications.web.monitor.call': '调用总次数',
  'fc.applications.web.monitor.client.error': '客户端调用错误 (次)',
  'fc.metrice.time.one.hours': '最近一小时',
  'fc.metrice.time.one.days': '最近一天',
  'fc.metrice.time.one.weeks': '最近一周',
  'fc.metrice.time.one.month': '最近一个月',
  'fc.particle.time.hours': '小时',
  'fc.particle.time.days': '天',
  'fc.particle.time.weeks': '周',
  'fc.particle.time.months': '月',
  'fc.particle.time.years': '年',
  'fc.guide.start.to_gudie': '开始向导',
  'fc.guide.close.to_gudie': '我已了解',

  // 监控地区
  'fc.monitor.region.cn-hangzhou': '杭州',

  'fc.monitor.region.cn-shanghai': '上海',
  'fc.monitor.region.cn-qingdao': '青岛',
  'fc.monitor.region.cn-beijing': '北京',
  'fc.monitor.region.cn-zhangjiakou': '张家口',
  'fc.monitor.region.cn-huhehaote': '呼和浩特',
  'fc.monitor.region.cn-shenzhen': '深圳',
  'fc.monitor.region.cn-chengdu': '成都',
  'fc.monitor.region.cn-hongkong': '香港',
  'fc.monitor.region.ap-southeast-1': '新加坡',
  'fc.monitor.region.ap-southeast-2': '澳大利亚(悉尼)',
  'fc.monitor.region.ap-southeast-3': '马来西亚(吉隆坡)',
  'fc.monitor.region.ap-southeast-5': '印度尼西亚(雅加达)',
  'fc.monitor.region.ap-northeast-1': '日本(东京)',
  'fc.monitor.region.eu-west-1': '英国(伦敦)',
  'fc.monitor.region.eu-central-1': '法兰克福',
  'fc.monitor.region.us-west-1': '美国(硅谷)',
  'fc.monitor.region.us-east-1': '美国(弗吉尼亚)',
  'fc.monitor.region.ap-south-1': '印度(孟买)',
  'fc.monitor.region.cn-zhangjiakou-corp': '弹内生产环境-张北',
  'fc.vpc.migrate.instance_link.detail': '使用性能实例请先',

  'fc.reserved.not_supported.EnhancedInstance':
    '账号 {userId} 尚不支持性能实例功能， <a href="https://help.aliyun.com/document_detail/53087.html" target="#">联系我们</a>添加该账号到白名单',

  'fc.function.instance.type': '函数实例类型',
  'fc.function.instance.type.message': '性能实例产生的资源账单不计入免费额度',
  'fc.function.instance.type.vpc': '(非 vpc 集群用户无法选择此函数实例类型，如需使用，请联系我们迁移至 vpc 集群)',
  'fc.function.instance.type.polarity.instanance': '弹性实例',
  'fc.function.instance.type.large.specifications': '性能实例',
  'fc.function.instance.type.reverse': '该操作不可逆，点击确认继续修改，详情请参考 <a class="mockAStyle" href="https://help.aliyun.com/document_detail/199112.html" target="_blank">实例介绍</a>',
  'fc.function.instance.type.large.specifications.reverse': '性能实例暂不支改为弹性实例，详情请参考 <a class="mockAStyle" href="https://help.aliyun.com/document_detail/199112.html" target="_blank">实例介绍</a>',

  // 创建服务绑定日志

  // 创建服务绑定日志
  'fc.create.service.bindLog_label': '绑定日志',

  'fc.create.service.bindLog_notopen': '日志未开通',

  'fc.create.service.bindLog_tip':
    '选择绑定日志，您可以查看函数执行日志，方便函数开发调试，绑定日志将会自动做如下操作：自动给服务绑定日志项目 {logName}，并授予服务 AliyunFCLogExecutionRole 执行角色，让服务拥有写日志库的权限',

  'fc.uploadFolder.zipLoading': '文件压缩中，请稍后...',
  'fc.uploadFolder.zipFile.tip': '文件压缩成功',
  'fc.uploadFolder.zipFile.errTip': '文件压缩失败',
  'fc.uploadFolder.zipFile.isnull': '未上传文件夹',
  'fc.uploadFolder.button': '选择文件夹',
  'fc.uploadFolder.zipFile.error.tip': '压缩包异常，请检查压缩包是否完整后重试',

  // 新版服务函数页面
  'fc.serviceAndfunction': '服务及函数',
  'fc.add.server': '新增服务',
  'fc.add.function': '新增函数',
  'fc.import.framework': '导入框架',
  'fc.server.list': '服务列表',
  'fc.function.new_create.config': '请设置函数相关属性。',

  'fc.service.address': '所在服务',
  'fc.new_create.service': '新建服务',
  'fc.new_create.service.config': '配置函数',
  'fc.new_create.service.complete': '完成新建',
  'fc.new_create.function.way': '新建函数方式',
  'fc.server_name.null.tip': '服务不能为空！',
  'fc.server_desc': '服务描述',
  'fc.server.version.new': '最新',
  'fc.server.update': '修改配置',
  'fc.tag.management': '标签管理',
  'fc.tag.save': '保存',
  'fc.tag.cancel': '取消',
  'fc.tag.name': '标签名称',
  'fc.tag.key': '值',
  'fc.tag.operation': '操作',
  'fc.tag.delete': '删除',
  'fc.tag.name.longest.limit': '最长14个字符',

  // 链路追踪集成
  'fc.tracing.show.token': '显示Token',

  'fc.tracing.title': '链路追踪',
  'fc.tracing_config_false': '关',
  'fc.tracing.title.config': '链路追踪配置',
  'fc.tracing.open.title': '开启链路追踪',
  'fc.tracing.introduce': '1. 函数计算会自动获取本区域链路追踪的内网接入点，并基于 Jaeger 上传函数执行信息到同区域的链路追踪服务<br/> 2. 链路追踪会产生少量费用',
  'fc.tracing.access.point': '链路追踪接入点',
  'fc.tracing.query': '调用链查询',
  'fc.tracing.open_state.server.title': '1.链路和最终服务状态: ',
  'fc.tracing.open_state.desc.title': '2.开启链路追踪: ',
  'fc.tracing.open_state.title': '使用链路追踪，追踪全链路状态',
  'fc.tracing.desc.tip': '函数计算基于 Jaeger 上传函数执行信息到同区域的链路追踪服务',
  'fc.tracing.not_open.err': '当前用户没有授权给云产品TracingAnalysis',
  'fc.tracing.not_open': '链路追踪Tracing Analysis未开通, <a href="https://tracing.console.aliyun.com/">前往开通</a>',
  'fc.tracing.open_state.server.recommended.tip': '推荐您开通Tracing以便查看调用链分析',
  'fc.tracing.title.not_open': '链路追踪服务未开通',
  'fc.tracing.title.not_open.go': '前往开通',

  // 新增触发器
  'fc.trigger.cdn.title': 'CDN事件触发器器',

  'fc.trigger.cdn.context': '通过该触发器可以对CDN事件进行自定义处理。',
  'fc.trigger.Iot.title': 'IoT触发器',
  'fc.trigger.Iot.context': '可以使用规则引擎数据流转，将数据转发至函数计算（FC）中，然后由函数计算进行业务处理。',
  'fc.trigger.code.title': '云监控触发器',
  'fc.trigger.code.context': '通过云监控触发函数计算，可以针对监控事件进行进一步业务处理。',
  'fc.trigger.kafka.title': '消息队列Kafka版Connector触发器',
  'fc.trigger.kafka.context': '通过消息队列Kafka版Connector对函数计算进行触发。',
  'fc.trigger.bridge.title': '事件总线EventBridge触发器',
  'fc.trigger.bridge.context': '可以通过事件规则过滤事件，将事件路由到函数计算。',
  'fc.trigger.http.title': 'HTTP触发器',
  'fc.trigger.title.link': '可以在对应产品控制台设置该触发器, <a class="mockAStyle" href={href} target="_blank">查看文档</a>',
  'fc.trigger.support.event': 'Event函数不支持配置该类型触发器',
  'fc.trigger.support.http': 'HTTP函数不支持配置该类型触发器',

  // 函数模版
  'fc.functionTemp.title': '函数模版',

  'fc.functionTemp.type.hot': '热门模板',
  'fc.functionTemp.type.novice': '新手入门',
  'fc.functionTemp.type.basiscode': '基础云产品',
  'fc.functionTemp.type.graphic': '图文处理',
  'fc.functionTemp.type.other': '其他实践',
  'fc.functionTemp.configuration.deploy': '配置部署',
  'fc.functionTemp.configuration.detail': '模版详情',
  'fc.create_new.role': '创建新角色',
  'fc.choose_new.role': '选择角色',
  'fc.create_new.add_polices': '添加策略',
  'fc.create_new.add_polices.title': '添加新策略',
  'fc.create_new.polices': '新建策略',
  'fc.polices.detail': '策略详情',
  'fc.choose.polices.title': '选择策略模版',
  'fc.author.to_ram': 'RAM配置授权',
  'fc.author.to_ram.title': '添加的新策略将跳转至 <a href="https://ram.console.aliyun.com/policies" target="_blank">RAM</a> 产品页授权，授权成功后将返回此页面继续配置',
  'fc.author.to_ram.cancel': '取消',
  'fc.create_new.default.role': '使用默认角色 <a class="mockAStyle">fc-default-role</a> 需要授权创建',
  'fc.add.nas_config': '添加配置',
  'fc.add.nas_config.title': '新建NAS',
  'fc.service.version.select.label': '服务版本',
  'fc.service.alias.select.label': '服务别名',
  'fc.service.VersionPanelNew.log.title': '日志',
  'fc.service.VersionPanelNew.monitor.title': '监控',
  'fc.service.VersionPanelNew.ARN.title': 'ARN',

  // 监控概览详情
  'fc.applications.monitor.preview': '概览',

  'fc.servcer.not.open.nas':
    'NAS 服务未开通。 请前往<a class="mockAStyle" href="https://nasnext.console.aliyun.com/introduction" target="_blank">NAS</a> 开通 ，<a class="mockAStyle" href="https://help.aliyun.com/document_detail/111755.html" target="_blank">NAS帮助文档</a>。',

  'fc.reserved.not_log.error': '当前账号 {userId} 最多创建 {logcount} 个日志项目，已经达到上线',
  'fc.applications.monitor.detail': '详情',
  'fc.applications.monitor.real-time': '实时',
  'fc.applications.monitor.one-hours': '1小时',
  'fc.applications.monitor.one-day': '24小时',
  'fc.applications.monitor.seven-day': '7天',
  'fc.applications.monitor.thirty-day': '30天',
  'fc.applications.monitor.custom': '自定义',
  'fc.applications.monitor.request': '请求数',
  'fc.applications.monitor.errrequest': '错误请求数',
  'fc.applications.monitor.response': '平均响应时间',
  'fc.applications.monitor.consumption': '平均消耗内存',
  'fc.applications.monitor.service-select.title': '',
  'fc.applications.monitor.request-const.title': '请求数（次）',
  'fc.applications.monitor.response-time.title': '响应时间（ms）',

  'fc.applications.monitor.response-time.tip':
    '自请求到达函数计算开始到请求离开函数计算为止消耗的时间',

  'fc.applications.monitor.response-time': '',
  'fc.applications.monitor.invokeCount.title': '调用次数（次）',
  'fc.applications.monitor.invokeCount.unit': '次',
  'fc.applications.monitor.memoryUsage.title': '运行内存（MB）',
  'fc.applications.monitor.memoryUsage.unit': 'MB',
  'fc.applications.monitor.avgDuration.title': '运行时间（ms）',
  'fc.applications.monitor.avgDuration.unit': 'ms',
  'fc.applications.monitor.functionErrors.title': '错误次数（次）',
  'fc.applications.monitor.functionErrors.unit': '次',
  'fc.applications.monitor.FunctionHttpTrigger5xx.title': 'HTTP 5XX（次）',
  'fc.applications.monitor.FunctionHttpTrigger4xx.title': 'HTTP 4XX（次）',
  'fc.applications.monitor.FunctionHttpTrigger3xx.title': 'HTTP 3XX（次）',
  'fc.applications.monitor.FunctionHttpTrigger2xx.title': 'HTTP 2XX（次）',
  'fc.applications.monitor.FunctionHttpTriggerxxx.unit': '次',
  'fc.applications.monitor.FunctionLatencyMax.label': '最大延时（ms）',
  'fc.applications.monitor.FunctionLatencyMin.label': '最小延时（ms）',
  'fc.applications.monitor.FunctionLatencyAvg.label': '平均延时（ms）',
  'fc.applications.monitor.FunctionClientErrors.label': '客户端错误（次）',
  'fc.applications.monitor.FunctionThrottlesNew.label': '流控错误（次）',
  'fc.applications.monitor.FunctionServerErrorsNew.label': '系统错误（次）',
  'fc.applications.monitor.FunctionFunctionErrors.label': '函数错误（次）',
  'fc.applications.monitor.FunctionBillableInvocations.label': '成功请求（次）',
  'fc.applications.log.search.title': '请输入内容',
  'fc.applications.log.tolog.button': '日志服务',

  'fc.applications.deploy.update.loading.tip':
    '代码上传中，请您耐心等待，不要关闭页面，以免数据丢失。',

  'fc.applications.deploy.update.upziploading.tip':
    '正在重新打包文件，预计需要 1-3 分钟，该任务已进任务队列，您可以进行其他操作，无需等待',

  'fc.applications.deploy.index.versionNumber': '版本编号',
  'fc.applications.deploy.index.versionName': '版本名称',
  'fc.applications.deploy.index.versionStatus': '版本状态',
  'fc.applications.deploy.index.versionStatus.major': '主版本',
  'fc.applications.deploy.index.versionStatus.versionWeight': '灰度版本（权重: {versionWeight}%）',
  'fc.applications.deploy.index.description': '版本描述',
  'fc.applications.deploy.index.createdTime': '创建时间',
  'fc.applications.deploy.index.operate.versionWeight': '设置灰度比例',
  'fc.applications.deploy.index.operate.toMajor': '设置为主版本',
  'fc.applications.deploy.index.operate.toVersionWeight': '设置为灰度版本',

  'fc.applications.deploy.index.operate.toVersionWeight.tip':
    '通过下面的滑动按钮设置灰度权重，本操作将设置灰度版本为 {weight}。',

  'fc.applications.deploy.index.operate.toMajor.tip':
    '本操作将主版本从版本 {oldVersion} 切换到版本 {newVersion}。',

  'fc.applications.deploy.index.deploy.button': '发布版本',
  'fc.applications.deploy.index.major.label': '主版本',
  'fc.applications.deploy.index.versionWeight.label': '灰度版本',
  'fc.applications.deploy.index.weightProportion.label': '灰度比例',
  'fc.applications.deploy.index.gobackMajor.label': '回退到主版本',
  'fc.applications.deploy.index.allDeploy.label': '全量部署',
  'fc.applications.deploy.index.versionList.label': '版本列表',
  'fc.applications.deploy.deployPanel.uploadFile.label': '上传代码包',
  'fc.applications.deploy.deployPanel.uploadFile.button': '选择文件',
  'fc.applications.deploy.deployPanel.versionName.label': '版本名称',
  'fc.applications.deploy.deployPanel.versionName.placeholder': '请输入版本名称',
  'fc.applications.deploy.deployPanel.description.label': '版本描述',
  'fc.applications.deploy.deployPanel.description.placeholder': '请输入版本描述',
  'fc.applications.deploy.deployPanel.description.initValue': '发布于 {time}',
  'fc.applications.deploy.deployPanel.versionWeight.label': '灰度权重',
  'fc.applications.deploy.deployPanel.versionWeight.label.instructions': '灰度权重说明',
  'fc.applications.deploy.index.gobackMajor.label.title': '本操作将把灰度版本的流量全部切换到主版本上。',
  'fc.applications.deploy.index.allDeploy.label.title': '本操作将设置版本{weight}为主版本，并且全部流量将切换到主版本上。',
  'fc.applications.deploy.index.major.label.describe.detail': '主版本是相对灰度版本而言，当没有进行灰度发布时，只会有主版本，且所有的流量都流向主版本，当进行灰度发布时，可以指定一个灰度比例，假如为 30%，则 30% 的流量流向灰度版本，剩余 70% 的流量流向主板版本。',
  'fc.applications.deploy.index.versionWeight.label.describe.detail': '灰度版本是相对主版本而言，当没有进行灰度发布时，只会有主版本，且所有的流量都流向主版本，当进行灰度发布时，可以指定一个灰度比例，假如为 30%，则 30% 的流量流向灰度版本，剩余 70% 的流量流向主板版本。',
  'fc.applications.deploy.deployPanel.versionWeight.input.placeholder': '请输入版本的灰度比例',
  'fc.applications.deploy.versionEdit.title': '版本修改',
  'fc.applications.deploy.versionEdit.major.label': '主版本',
  'fc.applications.deploy.versionEdit.versionWeight.label': '灰度版本',
  'fc.applications.deploy.versionEdit.versionWeight.null': '无',
  'fc.applications.deploy.versionEdit.versionWeight.placeholder': '请输入灰度比例',
  'fc.applications.deploy.monitor.error.title': '错误日志列表',
  'fc.applications.log.project.null': '您当前没有配置日志，',
  'fc.applications.log.project.to.resources': '立即配置',
  'fc.applications.overview.domain': '域名',
  'fc.applications.status.signal_complete': '初始化完成',
  'fc.applications.create.count.beyond.error': '创建应用数量已达限额 {createcount} 请删除一些应用，或者<a href="https://help.aliyun.com/document_detail/53087.html" target="#">联系我们</a>添加该账号到白名单',
  'fc.applications.appTmp.homepage.type.hot': '热门模版',
  'fc.applications.appTmp.homepage.type.novice': '新手入门',
  'fc.applications.appTmp.homepage.type.webapplication': 'web应用',
  'fc.applications.appTmp.homepage.type.ai': 'AI推理',
  'fc.applications.appTmp.homepage.type.audio': '音视频处理',
  'fc.applications.appTmp.homepage.type.graphic': '图文处理',
  'fc.applications.appTmp.homepage.type.realtime': '实时文件处理',
  'fc.applications.appTmp.homepage.type.other': '其他',
  'fc.applications.create.show_resources': '展开资源预览',
  'fc.applications.create.show_resources.tip': '正确填写以上配置后，可预览部署该应用将创建的资源',
  'fc.applications.create.deployment': '直接部署',
  'fc.applications.create.deployment.code': '通过代码仓库部署',
  'fc.applications.warehouse.private': '私密仓库',
  'fc.applications.warehouse.name': '代码仓库名称',
  'fc.applications.warehouse.cicd': 'CI/CD 工具',
  'fc.applications.alicode': '云效',
  'fc.applications.alicode.tip.1': '阿里云云效，云原生时代新 DevOps 平台，支持公共云、专有云和混合云多种部署形态，通过云原生新技术和研发新模式，助力创新创业和数字化转型企业快速实现研发敏捷和组织敏捷，打造“双敏”组织，实现 10 倍效能提升。',
  'fc.applications.alicode.tip.2': '云效目前需要您手动配置代码仓库和流水线，使用<a href="https://help.aliyun.com/document_detail/153762.html" target="_blank">文档参考</a>',
  'fc.applications.repo.loading.tip': '仓库授权中.....',
  'fc.applications.warehouse.create.success': '仓库创建成功',
  'fc.applications.warehouse.create.success.view': '仓库创建成功，您需要在<a href="{url}" target="#">Github Secret</a>中配置密钥信息才可以使用后续的Github Action进行自动化部署。',
  'fc.applications.warehouse.create.success.view.1': 'Secret中密钥关系为：',
  'fc.applications.warehouse.create.success.view.id': 'ALIYUN_ACCESS_KEY_ID：{id}',
  'fc.applications.warehouse.create.success.view.key': 'ALIYUN_ACCESS_KEY_SECRET：您的AccessKey ID(<a href="https://usercenter.console.aliyun.com/?#/manage/ak" target="#">点击获取</a>)',
  'fc.applications.warehouse.create.success.view.secret': 'ALIYUN_ACCOUNT_ID：您的AccessKey Key(<a href="https://usercenter.console.aliyun.com/?#/manage/ak" target="#">点击获取</a>)',
  'fc.applications.warehouse.create.gitee.success.view': '仓库创建成功，您需要在<a href="{url}" target="#">Gitee Secret</a>中配置密钥信息才可以使用后续的Github Go进行自动化部署。',
  'fc.applications.warehouse.create.gitee.success.view.1': 'Secret中密钥关系为：',
  'fc.applications.warehouse.create.gitee.success.view.id': 'ACCESS_KEY_ID：{id}',
  'fc.applications.warehouse.create.gitee.success.view.key': 'ACCESS_KEY_SECRET：您的AccessKey ID(<a href="https://usercenter.console.aliyun.com/?#/manage/ak" target="#">点击获取</a>)',
  'fc.applications.warehouse.create.gitee.success.view.secret': 'ACCOUNT_ID：您的AccessKey Key(<a href="https://usercenter.console.aliyun.com/?#/manage/ak" target="#">点击获取</a>)',
  'fc.applications.create.deployment.btn': '确定',

  // 新增层文案
  'fc.layer.title': '层管理',
  'fc.layer.label': '层',
  'fc.layer.label.version': '版本',
  'fc.layer.label.function.title': '层（Layer)',
  'fc.layer.new_create': '新建层',
  'fc.layer.describe.label': '函数计算层（Layer）通过代码包的方式来发布与函数相关的扩展包，比如依赖库、自定义运行环境等。利用层可以帮助您提炼函数公共库，减少函数代码包体积，加快函数的发布速度。',
  'fc.layer.describe.label.url': '了解更多',
  'fc.layer.publishLayer.version': '新增版本',
  'fc.layer.list.version': '层版本',
  'fc.layer.list.state': '状态',
  'fc.layer.list.runtime': '运行环境',
  'fc.layer.list.createtime': '创建时间',
  'fc.layer.list.desc': '描述',
  'fc.layer.list.action': '操作',
  'fc.layer.list.action.download': '下载代码',
  'fc.layer.list.action.delete': '删除',
  'fc.layer.list.action.delete.confirm': '确认要删除该层版本 {version} 吗？',
  'fc.layer.list.action.delete.confirm.ok': '层 {name} 版本 {version} 已删除',
  'fc.layer.create.name': '层名称',
  'fc.layer.create.desc': '层描述',
  'fc.layer.create.upload': '上传代码',
  'fc.layer.create.runtime': '运行环境',
  'fc.layer.new_create.button': '新建',
  'fc.layer.new_create.name.tip': '必须以字母开头，可含数字、字母（大小写敏感）、连字符，长度小于64个字符',
  'fc.layer.new_create.name.require': '层名称不能为空',
  'fc.layer.new_create.runtime.require': '运行环境不能为空',
  'fc.layer.new_create.code.require': '代码吧不能为空',
  'fc.layer.publishLayer.version.add.success': '层 {name} 添加成功！',
  'fc.layer.publishLayer.version.add.version.success': '层 {name} 新版本添加成功！',
  'fc.layer.not_supported': '账号 {userId} 尚不支持layer功能， <a href="https://help.aliyun.com/document_detail/53087.html" target="#">联系我们</a>添加该账号到白名单',
  'fc.layer.not_supported.runtime': '当前选择的层不支持运行环境 {runtime}',
  'fc.layer.label.limit.max': '最多选择5个层',
  'fc.layer.choose.layer': '选择层',
  'fc.layer.choose.layer.version': '选择版本',

  // 2020/11 月重构应用中心文案
  'fc.app.page.menu.my_apps': '我的应用',

  'fc.app.page.menu.recently_viewed': '最近查看：',
  'fc.app.page.menu.search.placeholder': '搜索我的应用',
  'fc.app.page.app_overview.web.title': 'Web 应用框架',
  'fc.app.page.app_overview.web.title.placeholder': '上传应用代码包直接部署 Web 应用，零代码改造',
  'fc.app.page.app_overview.stencil.title': '应用模板',
  'fc.app.page.app_overview.stencil.title.placeholder': '通过应用模板直接部署应用',
  'fc.app.page.app_overview.stencil.search.placeholder': '搜索模板',
  'fc.app.page.app_overview.stencil.deploy': '配置部署',
  'fc.app.page.app_overview.stencil.template_details': '模版详情',
  'fc.app.page.create_template.title': '新建模版应用',
  'fc.app.page.create_template.runtime.image.choose': '选择阿里云镜像',
  'fc.app.page.create_template.runtime.image.tag.choose': '选择版本',
  'fc.app.page.create_template.runtime.image.tip': '仅支持位于阿里云公共容器镜像',
  'fc.app.page.create_template.runtime.image.create': '<a class="mockAStyle" href="https://cr.console.aliyun.com" target="_blank">创建容器镜像</a>',
  'fc.app.page.create_template.template_id.not_fonut': '模版 {templateId} 不存在。',
  'fc.app.page.create_template.template_yml.not_fonut': '获取配置文件失败。',
  'fc.app.page.create_web.runtime.not_fonut': '语言类型 {runtimeType} 不存在。',
  'fc.app.page.create_web.basic_config.upload_code.label': '上传代码',
  'fc.app.page.create_web.basic_config.upload_code.local.radio': '代码包',
  'fc.app.page.create_web.basic_config.upload_code.local.button': '上传代码',
  'fc.app.page.create_web.basic_config.upload_code.local.error': '未上传代码包。',
  'fc.app.page.create_web.basic_config.upload_code.folder.radio': '文件夹',
  'fc.app.page.create_web.advanced_config.cname.title': '应用域名',
  'fc.app.page.create_web.config.create.button': '部署',
  'fc.app.page.create_web.alert.ok.button': '查看事件',
  'fc.app.page.create_web.alert.sls.title': '正在处理日志配置',
  'fc.app.page.create_web.alert.vpc.title': '正在处理 VPC 配置',
  'fc.app.page.create_web.alert.vpc.name.lable': '专有网络名称',
  'fc.app.page.create_web.alert.vpc.vswitch.lable': '交换机名称',
  'fc.app.page.create_web.alert.vpc.security_group.lable': '安全组名称',
  'fc.app.page.create_web.alert.nas.title': '正在处理 NAS 配置',
  'fc.app.page.create_web.alert.check_app_status.title': '检测是否存在异步任务',
  'fc.app.page.create_web.alert.app_status.name.label': '任务名称',
  'fc.app.page.create_web.alert.creating_app.title': '应用创建中，请稍候',
  'fc.app.page.create_web.tagResourceAndRemoveProcessedAppStatus.error': '绑定标签失败',
  'fc.app.page.create_web.alert.tip': '应用创建成功后，在服务与函数、应用详情中均可查看资源',
  'fc.applications.web.cancel': '取消',
  'fc.applications.create.title': '新建 Web 应用',
  'fc.applications.appTmp.homepage.type.full_stack': '全栈应用',
  'fc.applications.appTmp.homepage.type.monitor': '监控告警',
  'fc.applications.appTmp.homepage.type.big_data': '大数据',
  'fc.applications.appTmp.homepage.type.lot': 'loT',
  'fc.applications.list.search.placeholder': '搜索我的应用',
  'fc.applications.list.title': '应用名称',
  'fc.applications.list.engine': '类型',
  'fc.applications.list.tmp': '模版应用',
  'fc.applications.list.web': 'Web 应用',
  'fc.applications.list.status': '状态',
  'fc.applications.list.description': '状态描述',
  'fc.applications.list.update_time': '最后操作时间',
  'fc.applications.list.operate': '操作',
  'fc.applications.list.operate.delete': '删除',
  'fc.applications.list.runningStatus': '任务进行中',
  'fc.applications.list.succeedStatus': '创建完成',
  'fc.applications.list.movingStatus': '创建中',
  'fc.applications.list.failedStatus': '失败',
  'fc.applications.list.status.delete': '终止任务',
  'fc.applications.list.status.error': '此列为任务队列，不支持查看',
  'fc.applications.web.create.step2.senior.title': '高级设置',
  'fc.applications.web.create.step2.environmentVariable.title': '环境变量',
  'fc.applications.web.create.step2.environmentVariable.add': '环境变量',
  'fc.applications.web.create.step2.environmentVariable.delete': '删除',
  'fc.applications.web.create.step2.senior.log.switch.label': '将日志输出到 SLS',
  ...window.ALIYUN_WIND_MESSAGE,
  ...window.ALIYUN_WINDV2_MESSAGE,
  ...window.ALIYUN_FC_CONSOLE_MESSAGE,
};
