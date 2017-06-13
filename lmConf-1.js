{
	"dbiAuthTable": "fixture",
	"dbiPasswordMailCol": "email",
	"userDB": "DBI",
	"logoutServices": {},
	"whatToTrace": "_whatToTrace",
	"locationRules": {
		"test2.example.com": {
			"default": "accept",
			"^/logout": "logout_sso"
		},
		"manager.example.com": {
			"(?#Notifications)/notifications": "$uid eq \"admin\"",
			"(?#Sessions)/sessions": "$uid eq \"admin\"",
			"(?#Configuration)^/(manager\\.html|conf/)": "$uid eq \"admin\"",
			"default": "$uid eq \"admin\""
		},
		"op.example.com": {
			"default": "accept",
			"(?#Logout)^/logout": "logout_sso"
		},
		"test1.example.com": {
			"default": "accept",
			"^/logout": "logout_sso"
		}
	},
	"oidcRPMetaDataOptionsExtraClaims": null,
	"casStorageOptions": {},
	"lwpSslOpts": {},
	"remoteGlobalStorageOptions": {},
	"samlIDPMetaDataOptions": null,
	"oidcServiceMetaDataAuthnContext": {},
	"localSessionStorage": "Cache::FileCache",
	"dbiAuthnLevel": 2,
	"samlIDPMetaDataExportedAttributes": null,
	"oidcOPMetaDataJWKS": null,
	"dbiUserChain": "DBI:CSV:f_dir=/usr/share/lemonldap-ng/portal;f_ext=.csv/r",
	"oidcRPMetaDataOptions": null,
	"cookieName": "lemonldap",
	"portalSkinBackground": "1280px-Cedar_Breaks_National_Monument_partially.jpg",
	"portalSkin": "bootstrap",
	"samlSPMetaDataOptions": null,
	"passwordDB": "DBI",
	"loginHistoryEnabled": 1,
	"cfgLog": "",
	"authentication": "DBI",
	"dbiAuthChain": "DBI:CSV:f_dir=/usr/share/lemonldap-ng/portal;f_ext=.csv/r",
	"domain": "example.com",
	"dbiAuthPassword": "test",
	"grantSessionRules": {},
	"userPivot": "email",
	"timeout": 72000,
	"dbiAuthPasswordCol": "password",
	"oidcStorageOptions": {},
	"securedCookie": 0,
	"slaveExportedVars": {},
	"oidcOPMetaDataOptions": null,
	"issuerDBGetParameters": {},
	"mailUrl": "http://auth.example.com/mail.pl",
	"registerUrl": "http://auth.example.com/register.pl",
	"notificationStorageOptions": {
		"dirName": "/var/lib/lemonldap-ng/notifications"
	},
	"persistentStorageOptions": {
		"Directory": "/var/lib/lemonldap-ng/psessions",
		"LockDirectory": "/var/lib/lemonldap-ng/psessions/lock"
	},
	"key": "OWgRn.LtxBqsIC&p",
	"cfgNum": "1",
	"globalStorage": "Apache::Session::File",
	"samlSPMetaDataXML": null,
	"portal": "http://auth.example.com/",
	"facebookExportedVars": {},
	"dbiUserTable": "fixture",
	"dbiExportedVars": {
		"lastname": "lastname",
		"job": "job",
		"uid": "email",
		"firstname": "firstname",
		"company": "company",
		"phone": "phone"
	},
	"samlSPMetaDataExportedAttributes": null,
	"localSessionStorageOptions": {
		"directory_umask": "007",
		"default_expires_in": 600,
		"cache_root": "/tmp",
		"cache_depth": 3,
		"namespace": "lemonldap-ng-sessions"
	},
	"cfgAuthorIP": "172.17.0.1",
	"ldapExportedVars": {},
	"openIdExportedVars": {},
	"cfgAuthor": "admin",
	"authChoiceModules": {},
	"captchaStorageOptions": {},
	"demoExportedVars": {
		"cn": "cn",
		"mail": "mail",
		"uid": "uid"
	},
	"exportedVars": {
		"UA": "HTTP_USER_AGENT"
	},
	"post": {
		"op.example.com": {},
		"test1.example.com": {},
		"test2.example.com": {},
		"manager.example.com": {}
	},
	"casAttributes": {},
	"cfgDate": 1497262693,
	"persistentStorage": "Apache::Session::File",
	"dbiUserPassword": "test",
	"reloadUrls": {
		"reload.example.com": "http://reload.example.com/reload"
	},
	"oidcOPMetaDataExportedVars": null,
	"vhostOptions": {
		"test2.example.com": {},
		"manager.example.com": {},
		"op.example.com": {},
		"test1.example.com": {}
	},
	"notificationStorage": "File",
	"webIDExportedVars": {},
	"googleExportedVars": {},
	"nginxCustomHandlers": {},
	"CAS_proxiedServices": {},
	"sessionDataToRemember": {},
	"dbiAuthUser": "test",
	"notification": 1,
	"oidcOPMetaDataJSON": null,
	"macros": {
		"_whatToTrace": "$_auth eq 'SAML' ? \"$_user\\@$_idpConfKey\" : \"$_user\""
	},
	"applicationList": {
		"1sample": {
			"test1": {
				"type": "application",
				"options": {
					"logo": "demo.png",
					"display": "auto",
					"description": "A simple application displaying authenticated user",
					"uri": "http://test1.example.com/",
					"name": "Application Test 1"
				}
			},
			"test2": {
				"options": {
					"description": "The same simple application displaying authenticated user",
					"display": "auto",
					"logo": "thumbnail.png",
					"name": "Application Test 2",
					"uri": "http://test2.example.com/"
				},
				"type": "application"
			},
			"type": "category",
			"catname": "Sample applications"
		},
		"3documentation": {
			"officialwebsite": {
				"options": {
					"description": "Official LemonLDAP::NG Website",
					"display": "on",
					"logo": "network.png",
					"uri": "http://lemonldap-ng.org/",
					"name": "Offical Website"
				},
				"type": "application"
			},
			"localdoc": {
				"options": {
					"display": "on",
					"description": "Documentation supplied with LemonLDAP::NG",
					"logo": "help.png",
					"uri": "http://manager.example.com/doc/",
					"name": "Local documentation"
				},
				"type": "application"
			},
			"type": "category",
			"catname": "Documentation"
		},
		"2administration": {
			"manager": {
				"options": {
					"description": "Configure LemonLDAP::NG WebSSO",
					"display": "auto",
					"logo": "configure.png",
					"uri": "http://manager.example.com/manager.html",
					"name": "WebSSO Manager"
				},
				"type": "application"
			},
			"notifications": {
				"options": {
					"name": "Notifications explorer",
					"uri": "http://manager.example.com/notifications.html",
					"display": "auto",
					"description": "Explore WebSSO notifications",
					"logo": "database.png"
				},
				"type": "application"
			},
			"catname": "Administration",
			"type": "category",
			"sessions": {
				"type": "application",
				"options": {
					"logo": "database.png",
					"description": "Explore WebSSO sessions",
					"display": "auto",
					"name": "Sessions explorer",
					"uri": "http://manager.example.com/sessions.html"
				}
			}
		}
	},
	"samlIDPMetaDataXML": null,
	"samlStorageOptions": {},
	"registerDB": "Demo",
	"dbiUserUser": "test",
	"oidcRPMetaDataExportedVars": null,
	"groups": {},
	"globalStorageOptions": {
		"Directory": "/var/lib/lemonldap-ng/sessions",
		"generateModule": "Lemonldap::NG::Common::Apache::Session::Generate::SHA256",
		"LockDirectory": "/var/lib/lemonldap-ng/sessions/lock"
	},
	"exportedHeaders": {
		"test2.example.com": {
			"Auth-User": "$uid"
		},
		"manager.example.com": {},
		"op.example.com": {
			"phone": "$phone",
			"Auth-Domain": "\"open-paas.org\"",
			"Auth-User": "$uid",
			"company": "$company",
			"firstname": "$firstname",
			"job": "$job",
			"lastname": "$lastname"
		},
		"test1.example.com": {
			"Auth-User": "$uid"
		}
	},
	"portalSkinRules": {},
	"dbiAuthLoginCol": "email"
}
