function PlayerControler(){
    var blocker = document.getElementById( 'blocker' );
				var instructions = document.getElementById( 'instructions' );

				instructions.addEventListener( 'click', function () {

					controls.lock();

				}, false );

				controls.addEventListener( 'lock', function () {

					instructions.style.display = 'none';
					blocker.style.display = 'none';

				} );

				controls.addEventListener( 'unlock', function () {

					blocker.style.display = 'block';
					instructions.style.display = '';

				} );

				scene.add( controls.getObject() );

				var onKeyDown = function ( event ) {

					switch ( event.keyCode ) {

						case 38: // up
						case 90: // z
							moveForward = true;
							break;

						case 37: // left
						case 81: // q
							moveLeft = true;
							break;

						case 40: // down
						case 83: // s
							moveBackward = true;
							break;

						case 39: // right
						case 68: // d
							moveRight = true;
							break;

						case 32: // space
							if ( canJump === true ) velocity.y += 250;
							canJump = false;
							break;

					}

				};

				var onKeyUp = function ( event ) {

					switch ( event.keyCode ) {

						case 38: // up
						case 90: // z
							moveForward = false;
							break;

						case 37: // left
						case 81: // q
							moveLeft = false;
							break;

						case 40: // down
						case 83: // s
							moveBackward = false;
							break;

						case 39: // right
						case 68: // d
							moveRight = false;
							break;

					}

				};

				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup', onKeyUp, false );
}