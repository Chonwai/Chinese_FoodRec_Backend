<?php

namespace App\DAO\Ingredient;

interface BaseDAOFactory
{
    public function getAll();
    public function getSpecify($request);
    public function insert($request);
    public function delete($request);
    public function update($request);
}
