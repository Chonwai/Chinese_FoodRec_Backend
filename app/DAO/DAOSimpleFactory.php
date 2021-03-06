<?php

namespace App\DAO;

use App\DAO\Ingredient\ChineseCuisineDAOFactory;
use App\DAO\Ingredient\DishDAOFactory;
use App\DAO\Ingredient\TasteDAOFactory;

class DAOSimpleFactory
{
    public static function createTasteDAO()
    {
        return new TasteDAOFactory();
    }

    public static function createChineseCuisineDAO()
    {
        return new ChineseCuisineDAOFactory();
    }

    public static function createDishDAO()
    {
        return new DishDAOFactory();
    }
}
