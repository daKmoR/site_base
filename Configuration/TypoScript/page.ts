# define default Language Label and Flag
mod.SHARED {
	defaultLanguageLabel = German
	defaultLanguageFlag = at
}

RTE.default.init {
	# define a stylesheet
	content_css = typo3conf/ext/site_default/Resources/Public/Css/Screen.css
}

## Frame Example ###################################################################################
#TCEFORM.tt_content.section_frame {
#	removeItems = 1,5,6,10,11,12,20,21
#	addItems.50 = Box
#}
# set in setupTS
# tt_content.stdWrap.innerWrap.cObject {
#   50 = TEXT
#   50 {
#     value = <div class="box">|</div>
#   }
# }

## Headings ########################################################################################
# Rename Headings
TCEFORM.tt_content.header_layout.altLabels.0 = Überschrift (pro Seite eine)
TCEFORM.tt_content.header_layout.altLabels.2 = Zwischenüberschrift
TCEFORM.tt_content.header_layout.altLabels.3 = Unterüberschrift

# Remove unneded Headings
TCEFORM.tt_content.header_layout.removeItems = 1,4,5,6

# set default Heading to <h2>
mod.wizards.newContentElement.wizardItems.common.elements.text.tt_content_defValues.header_layout = 2
mod.wizards.newContentElement.wizardItems.common.elements.textpic.tt_content_defValues.header_layout = 2
mod.wizards.newContentElement.wizardItems.common.elements.image.tt_content_defValues.header_layout = 2

## new Content Element wizard ######################################################################
# use tabs
mod.wizards.newContentElement.renderMode = tabs
# only show text & textpic
mod.wizards.newContentElement.wizardItems.common.show = text,textpic,image