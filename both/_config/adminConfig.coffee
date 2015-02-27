AdminConfig =
	name: Config.name
	collections : 
		Canvas: {
			color: 'red'
			icon: 'pencil'
			tableColumns: [
              {label: 'Title',name:'title'}
            ]
		}

	dashboard:
		homeUrl: '/dashboard'
		# widgets: [
		# 	{
		# 		template: 'adminCollectionWidget'
		# 		data:
		# 			collection: 'Posts'
		# 			class: 'col-lg-3 col-xs-6'
		# 	}
		# 	{
		# 		template: 'adminUserWidget'
		# 		data:
		# 			class: 'col-lg-3 col-xs-6'
		# 	}
		# ]
	autoForm: 
	        omitFields: ['createdAt', 'updatedAt']

if Meteor.isClient
	window.AdminConfig = AdminConfig
else if Meteor.isServer
	global.AdminConfig = AdminConfig