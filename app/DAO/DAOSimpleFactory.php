<?php

namespace App\DAO;

use App\DAO\Ingredient\TasteDAOFactory;

class DAOSimpleFactory
{
    public static function createTasteDAO()
    {
        return new TasteDAOFactory();
    }
}
