ig.module(
        'plusplus.config-user'
    )
    .defines(function () {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {};
        ig.CONFIG.CHARACTER.MAX_VEL_GROUNDED_X = 300;
        ig.CONFIG.CHARACTER.MAX_VEL_GROUNDED_Y = 300;

        ig.CONFIG.CHARACTER.MAX_VEL_UNGROUNDED_X = 300;
        ig.CONFIG.CHARACTER.MAX_VEL_UNGROUNDED_Y = 300;

        ig.CONFIG.CHARACTER.FRICTION_GROUNDED_X = 0;
        ig.CONFIG.CHARACTER.FRICTION_GROUNDED_Y = 0;

        ig.CONFIG.CHARACTER.SPEED_X = 1500;
        ig.CONFIG.CHARACTER.SPEED_Y = 1500;

        ig.CONFIG.ENTITY.BOUNCINESS = 40;
    });