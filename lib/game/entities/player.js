ig.module (
	'game.entities.player'
)
.requires(
    // note that anything in abstractities
    // is an abstract entity that needs to be extended
    'plusplus.abstractities.player',
	// require the projectile for the grenade
	'plusplus.abstractities.projectile',
	// and an explosion for fun
	'plusplus.entities.explosion',
	// require the shoot ability
	'plusplus.abilities.ability-shoot',
	// require the glow ability
	// lets see some lights!
	'plusplus.abilities.glow',
	// if you want to use the config
    // don't forget to require it
    'plusplus.core.config',
	// and some utils
	'plusplus.helpers.utils'
)
.defines( function() 
{
    "use strict";
	
	var _c = ig.CONFIG;
	var _ut = ig.utils;	

	ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
	
		animSheet: new ig.AnimationSheet (_c.PATH_TO_MEDIA + '/images/submarine.png', 32, 30),
		size: {x: 32, y: 30},
		offset: {x: 4, y: 2},
		gravityFactor: 0,

		// animations the Impact++ way
		
		animSettings: {
			idle: {
				frameTime: 1,
				sequence: [0]
			},
			run: {
				frameTime: 1, 
				sequence: [0]
			},
			jump: {
				frameTime: 1, 
				sequence: [0]
			},
			fall: {
				frameTime: 1, 
				sequence: [0]
			}
		},
		
		// settings for glow
		
		glowSettings: {
			// these directly correlate
			// to ig.Entity light properties
			light: {
				// the light should move with player
				performance: _c.DYNAMIC,
				// cast shadows only on static entities
				castsShadows: true
			}
		},
		
		// use this method to add properties
		// that need to be initialized one time
		// before the entity is added to the game
		
		initProperties: function () {

			this.parent();
			
			this.canJump = 0;
			this.canClimb = 0;

            this.grounded = 1;
            this.standing = 1;

			this.glow = new ig.AbilityGlow( this );
			
			this.abilities.addDescendants([ this.glow ]);
			
		},
		
		// use this method to change an entity internally
		
		updateChanges: function() {
			
			//User Input
			if ( ig.input.state('left') )
			{
				this.moveToLeft();
			}
			else if ( ig.input.state('right') )
			{
				this.moveToRight();
                ig.log("TEST");
			}
			else if ( ig.input.state('up') )
			{
				this.moveToUp();
			}
			else if ( ig.input.state('down') )
			{
				this.moveToDown();
			}
			
			this.parent();
			
		}

	});
});
