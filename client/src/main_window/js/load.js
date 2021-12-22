/*
 * This file is part of Depesha.

 * Depesha is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * Depesha is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with Depesha.  If not, see <https://www.gnu.org/licenses/>.
*/

const main = () => {
    web.notice('welcome')

    user.isNewUser? (
        require('../js/new_user'),
        setTimeout(
            () => {
                web.notice('auth')
            },
            1500
        )
    ) : (
        // loading list of friends
        web.load_friend()
    )

    // load animation
    {
        setTimeout(
            () => {
                start.style.opacity = 0
            },
            10
        )
        setTimeout(
            () => {
                start.remove()
            },
            1000
        )
    }

    // final
    console.log('ready') // todo u can delete this line
}

module.exports = {main}
