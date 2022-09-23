public abstract class Piece {
  public bool Killed{
    get; private set;
  };
  public bool IsWhite{
    get; private set;
  };

  public Piece(bool isWhite){
      IsWhite=isWhite
  }

  public abstract boolean canMove(Board board, Location start, Location end);
}

public class Location {
  public Piece Piece {get;  set;}
  public int x {get;  set;}
  public int y {get; set;}

  public Location(Piece piece, int x, int y){
    this.Piece = piece;
    this.x=x;
    this.y=y
  }
}

public class Knight extends Piece{
  
  public Night(boolean isWhite){
    super(isWhite);
  }

  public override boolean canMove(Board board, Location start, Location end){
    // can't move to a spot that has a piece of same color
    if (end.Piece.isWhite === this.isWhite){
      return false
    }
    int x = Math.abs(start.x - end.x);
    int y = Math.abs(start.y - end.y);
    return x*y == 2;

  }
}

public class Board {
  Location[][] boxes;

  public Board(){
    initBoard();
    // set initial black and whites, in correct spots

  }

  public Location getLoc(int x, int y){
    // boundaries
    // return exception if x < 0 or x>7
    return boxes[x][y]
  }

}

public class Move {
  public Player player;
  public Location start;
  public Location end;
  public Piece pieceMoved;
  public Piece pieceKilled;

  public Move(...){
    ...
    pieceMoved = start.Piece;
  }
}

public enum GameStatus


public class Game{
  Player[] players;
  Board board;
  GameStatus status;
  Player currentTurn;
  List<Move> movesPlayed;
}