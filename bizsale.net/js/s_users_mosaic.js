odoo.define('openerp_website.s_users_mosaic', function (require) {
    'use strict';

    var config = require('web.config');
    var s_animation = require('web_editor.snippets.animation');

    s_animation.registry.s_users_mosaic = s_animation.Class.extend({
        selector: ".s_users_mosaic",

        start: function (editable_mode) {
            this._super.apply(this, arguments);

            var self = this;
            var $win = $(window);
            this.$mosaic = this.$target.find('#mosaic');

            if (editable_mode || config.device.size_class <= config.device.SIZES.SM) {
                return;
            }

            var horizontal_pieces = 18;
            var vertical_pieces = 8;
            var total_pieces = horizontal_pieces * vertical_pieces;

            var count = 0;
            var imageCount = 1;
            var userImgs = [];

            var percentageH = 100 / (horizontal_pieces - 1);
            var percentageV = 100 / (vertical_pieces - 1);
            for (var i = 0 ; i < total_pieces ; i++) {
                var horizontal_position = (i % horizontal_pieces);
                var vertical_position = Math.floor(i / horizontal_pieces);

                var $userImg = $('<span/>');
                $userImg.css('background-position', (percentageH * horizontal_position) + '% ' + (percentageV * vertical_position) + '%')
                        .css('background-image', 'url(/openerp_website/static/src/img/2016/mosaic_1.jpg)');

                self.$mosaic.append($userImg);
                userImgs.push($userImg);
            }

            var visible = false;

            checkVisibility();

            this.checkVisibilityCallback = _.debounce(checkVisibility, 200);
            $win.on('scroll', this.checkVisibilityCallback);

            function checkVisibility() {
                var winScroll = $win.scrollTop();
                var mosaicTop = self.$mosaic.offset().top;
                var newVisible = (winScroll + $win.outerHeight() > mosaicTop && winScroll < mosaicTop + self.$mosaic.outerHeight());

                if (newVisible != visible) {
                    visible = newVisible;

                    if (visible) {
                        toggleDisplay();
                    } else {
                        clearTimeout(self.animation_timer);
                    }
                }
            }

            function toggleDisplay() {
                if (count === 0) {
                    shuffleArray(userImgs);
                }

                userImgs[count].toggleClass('o_fade');
                count = (count + 1) % total_pieces;
                
                self.animation_timer = setTimeout(toggleDisplay, 250);
            }

            function shuffleArray(array) {
                for (var i = array.length - 1 ; i > 0 ; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        },

        stop: function () {
            this._super.apply(this, arguments);

            clearTimeout(this.animation_timer);
            $(window).off('scroll', this.checkVisibilityCallback);
            this.$mosaic.empty();
        },
    });
});
