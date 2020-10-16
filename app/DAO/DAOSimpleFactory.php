<?php

namespace App\DAO;

use App\DAO\Ingredient\UsersDAOFactory;

class DAOSimpleFactory
{
    public static function createUsersDAO()
    {
        return new UsersDAOFactory();
    }
}
