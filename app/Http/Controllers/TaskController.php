<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{
    public function index(): JsonResponse
    {
        $list = Task::query()
            ->where('completed', false)
            ->where('user_id', Auth::id())
            ->get();

        return response()->json($list);
    }

    public function update($task): void
    {
        Task::query()
            ->where('user_id', Auth::id())
            ->where('id', $task)
            ->update(['completed' => true]);
    }

    public function destroy($task): JsonResponse
    {
        Task::query()
            ->where('user_id', Auth::id())
            ->where('id', $task)
            ->delete();
        return response()->json();
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $this->validate($request, [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
        ]);
        Task::create([
            'user_id' => Auth::id(),
            'title' => $request->get('title'),
            'description' => $request->get('description'),
        ]);

        return response()->json();
    }

}
