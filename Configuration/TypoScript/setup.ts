<INCLUDE_TYPOSCRIPT: source="FILE: EXT:site_base/Configuration/TypoScript/menus.ts">

## Language ########################################################################################
config {
	# only append the language value if not the default language
	linkVars = L(1)
	# prevent creation of double linkVars www.page.com/index.php?id=12&L=1&L=1
	# is just a cosmetical fix
	uniqueLinkVars = 1
	sys_language_overlay = hideNonTranslated
	sys_language_mode = content_fallback
}

# default language (german)
config {
	language = de
	sys_language_uid = 0
	htmlTag_langKey = de
	locale_all = de_AT.UTF-8
}

plugin.tx_mootoolsessentials.settings.language = de-DE

## Anti-Spam #######################################################################################
config {
	spamProtectEmailAddresses = -2
}

## Header ##########################################################################################
config {
	doctype = html5
	removeDefaultJS = external
	concatenateCss = 1
	# compressCss = 1
	concatenateJs = 1
	# compressJs = 1
}

page.headerData.10 = TEXT
page.headerData.10.value (
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
)

page {
	bodyTag >
	bodyTagCObject = COA
	bodyTagCObject {
		10 = TEXT
		10.value = <body
		10.noTrimWrap = || |

		20 < .10
		20.field = uid
		20.wrap = id="pid|"

		50 = TEXT
		50.value = class="
		50.noTrimWrap = | ||

		90 = TEXT
		90.value = "
		90.noTripWrap = || |

		100 = TEXT
		100.value = >
	}
}

## RealUrl #########################################################################################
config {
	baseURL = http://localhost
	simulateStaticDocuments = 0
	tx_realurl_enable = 1
	prefixLocalAnchors = all
}

## Cache & Debug ###################################################################################
# disable cache and concatenate if any typo3 be-user is logged in, otherwise remove debug-comments
[globalVar = TSFE:beUserLogin > 0]
	config {
		no_cache = 1
		concatenateCss = 0
		# compressCss = 0
		concatenateJs = 0
		# compressJs = 0
	}
[else]
	config.disablePrefixComment = 1
[global]