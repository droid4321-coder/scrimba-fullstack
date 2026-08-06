//rest parameter
//rest parameter catches all arguments that dont hold a parameter or match one
//we do that with...name
//it makes an array which is iterable
//the rest parameter must be the last parameter given, returns error if it is first one.
//there can only be 1 rest parameter

function setPermissionLevel(permissionLevel, ...names) {
    names.forEach((name) => {
        console.log(`${name} now has ${permissionLevel} level access`);
    })
    //console.log(`${name1} now has ${permissionLevel} level access`);
    //console.log(`${name2} now has ${permissionLevel} level access`);
    //console.log(`${name3} now has ${permissionLevel} level access`);
}

console.log(setPermissionLevel("admin", "Dave", "Sally", "Mike"));