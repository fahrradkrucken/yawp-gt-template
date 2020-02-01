import $ from 'jquery';

export default class NavHeader {

    constructor(navSelector, navToggleSelector) {
        this.navElement = $(navSelector);
        this.navToggleElement = $(navToggleSelector);

        this.navMobileToggleClass = 'nav-open';

        if (this.navElement.length) {

            if (this.navToggleElement.length) {
                this.navToggleElement.on('click', this.onMobileToggle.bind(this) );
            }

            this.menuDDClass = 'open';
            this.menuDD = this.navElement.find('.menu-item-has-children');

            this.navElement.find('.menu-item-has-children > a').on('click', this.onMobileDDOpen.bind(this));
            this.navElement.find('.menu-item-back > a').on('click', this.onMobileDDback.bind(this));
        }

    }

    onMobileToggle(event) {
        if (!this.navElement.hasClass( this.navMobileToggleClass )) {
            this.navElement.addClass( this.navMobileToggleClass );
            $('html').addClass('body-' +  this.navMobileToggleClass );
        } else {
            this.menuDD.removeClass(this.menuDDClass);
            this.navElement.removeClass( this.navMobileToggleClass );
            $('html').removeClass('body-' +  this.navMobileToggleClass );
        }
    }

    onMobileDDOpen(event) {
        event.preventDefault();
        if ($(event.target).parent().hasClass(this.menuDDClass)) {
            $(event.target).parent().removeClass(this.menuDDClass);
        } else {
            $(event.target).parent().addClass(this.menuDDClass);
            $(event.target).parent().siblings('.' + this.menuDDClass).removeClass(this.menuDDClass);
        }
    }

    onMobileDDback(event) {
        event.preventDefault();
        this.menuDD.removeClass(this.menuDDClass);
    }


}